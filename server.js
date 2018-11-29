/**
 * Created by prana on 11/24/2018.
 */

const express = require('express');
const mockServerData = require('./server.mock.json');
const mockUserData = require('./users.mock.json');
const app = express();
const PORT = process.env.PORT || 3000;
const _ = require('lodash');

app.use(express.static(__dirname + '/dist/ec2dash/'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.get('/login',(req,res)=>{
  const authToken = req.headers['authorization'];
  for (let token of mockUserData) {
    if (authToken === token) {
      res.status(200).send();
    }
  }
  res.status(401).send();
});

app.get('/api/instances', (req, res) => {
  if (_.isEmpty(req.query)) {
    return res.json({
      results: mockServerData,
      size: mockServerData.length
    });
  }

  let result = mockServerData;

  if (_.has(req.query, 'sortBy')) {
    const sortField = req.query.sortBy;
    result = _.sortBy(result, sortField);
  }

  if (_.has(req.query, 'desc')) {
    if (req.query.desc === "true") {
      result = result.reverse();
    }
  }

  if(_.has(req.query, 'search')) {
    const searchTerm = req.query.search;
    let results = [];
    _.forEach(result, (obj) => {
      for (let key in obj) {
        if(_.includes(obj[key], searchTerm)) {
          results.push(obj);
          break;
        }
      }
    });
    result = results;
  }

  let requiredSize = result.length;

  if(_.has(req.query, 'pageno') && _.has(req.query, 'itemsinpage')) {
    const pageNum = parseInt(req.query.pageno);
    const numberOfItems = parseInt(req.query.itemsinpage);
    let startIndex = (pageNum - 1) * numberOfItems;
    let endIndex = startIndex + numberOfItems;
    result = result.slice(startIndex, endIndex);
  }

  return res.json({
    results: result,
    size: requiredSize
  });
});



app.get('*', (req, res) => {
  res.sendFile(__dirname + '/dist/ec2dash/index.html')
});

app.listen(PORT, '0.0.0.0', function () {console.log("Server started")});

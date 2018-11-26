/**
 * Created by prana on 11/24/2018.
 */

const express = require('express');
const mockServerData = require('./server.mock.json');
const app = express();
const PORT = process.env.PORT || 3000;
const _ = require('lodash');

app.use(express.static(__dirname + '/dist/ec2dash/'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
//console.log((__dirname + '\\dist\\ec2dash\\'));

//app.use(express.json());

app.get('/api/instances', (req, res) => {
  if (_.isEmpty(req.query)) {
    return res.json(mockServerData);
  }

  let result = mockServerData;

  if (_.has(req.query, 'sortBy')) {
    const sortField = req.query.sortBy;
    if (_.startsWith(sortField, '-')) {
      result = _.sortBy(result,sortField).reverse();
    } else {
      result = _.sortBy(result, sortField);
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

  res.json(result);
});



app.get('*', (req, res) => {
  res.sendFile(__dirname + '/dist/ec2dash/index.html')
});

app.listen(PORT, '0.0.0.0', function () {console.log("Server started")});

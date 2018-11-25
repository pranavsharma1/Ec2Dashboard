/**
 * Created by prana on 11/24/2018.
 */

const express = require('express');
const mockServerData = require('./server.mock.json');
const app = express();

app.use( express.static(__dirname + '/dist/ec2dash/'));


//console.log((__dirname + '\\dist\\ec2dash\\'));

//app.use(express.json());

app.get('/api/instances', (req, res) => {
  res.json(mockServerData)
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/dist/ec2dash/index.html')
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port", PORT));

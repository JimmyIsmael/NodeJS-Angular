const http = require('http');
const express = require('express');
const bodyParser = require("body-parser");
const routes = require('./routes/routes');


const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';


const app = express();
app.use(bodyParser.json());

// Allowing access to app resources from other servers.
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("",routes);

app.listen(port, host, function (err) {
  if (err)
    throw err;
  console.log('Your server is running on http://' + host + ':' + port + '.');
});

module.exports = app;
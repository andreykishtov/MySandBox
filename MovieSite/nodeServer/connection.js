const Connection = require('tedious').Connection;
const Request = require('tedious').Request;
const TYPES = require('tedious').TYPES;

// Create connection to database
let config = {
  userName: 'sa', // update me
  password: 'Shadowwa1', // update me
  server: 'localhost',
  port: 1433,
  options: {
    database: 'Movie',
    encrypt: false
  }
};
var connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on('connect', function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected');
  }
});

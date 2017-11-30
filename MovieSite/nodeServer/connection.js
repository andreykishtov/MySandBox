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

connection.on('connect', err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Connected');
});

// connected = async () => {
//   try {
//     let connected = await connection.connect();
//     console.log('connected', connected);
//   } catch (error) {
//     console.log(error);
//   }
// };

// connected();

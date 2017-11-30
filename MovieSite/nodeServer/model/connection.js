const Connection = require('tedious').Connection;
// const Request = require('tedious').Request;
//const TYPES = require('tedious').TYPES;

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

// connected = async () => {
//   try {
//     let connected = await connection.on('connect');
//     console.log('connected', connected);
//   } catch (error) {
//     console.log(error);
//   }
// };

let callback = err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Connected');
};

// connection.on('connect', callback);

let startConnection = () => {
  return new Promise((resolve, reject) => {
    connection.on('connect', callback => {
      return resolve(callback);
    });
  });
};

startConnection().then(resolve => console.log(resolve));

// // Usage:
// exports.startConnection()  // Returns a Promise!
//   .then(users => {
//     // Do stuff with users
//   })
//   .catch(err => {
//     // handle errors
//   })

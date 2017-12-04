const Connection = require('tedious').Connection;

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

let startConnection = () => {
  return new Promise((resolve, reject) => {
    connection.on('connect', err => {
      if (err) return reject(err);
      return resolve('works');
    });
  });
};

startConnection().then(resolve => console.log(resolve));

module.exports = connection;

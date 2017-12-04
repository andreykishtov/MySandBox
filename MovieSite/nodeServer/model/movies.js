const connection = require('../model/connection');
const Request = require('tedious').Request;
const TYPES = require('tedious').TYPES;

module.exports = {
  async executeQuery(res, query) {
    try {
      var request = new Request(query, function(err) {
        if (err) {
          console.log(err);
        }
      });

      request.on('row', function(columns) {
        columns.forEach(function(column) {
          console.log('Sum: ' + column.value);
        });
      });

      let result = connection.execSql(request);
      res.json(result);
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  }
};

// function exec(sql) {
//   var timerName = 'QueryTime';

//   var request = new Request(sql, function(err) {
//     if (err) {
//       console.log(err);
//     }
//   });
//   request.on('doneProc', function(rowCount, more, rows) {
//     if (!more) {
//       console.timeEnd(timerName);
//     }
//   });
//   request.on('row', function(columns) {
//     columns.forEach(function(column) {
//       console.log('Sum: ' + column.value);
//     });
//   });
//   console.time(timerName);
//   connection.execSql(request);
// }

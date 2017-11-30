const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connection = require('./connection');

var sql = require('mssql');

const port = '3500';

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => console.log(`server listening On ${port}`));

const dbConfig = {
  user: 'andreykishtov',
  password: 'andrey',
  server: '<dbHost_URL>',
  database: '<dbName>'
};

// var  executeQuery = (res, query) => (
//   sql.connect(dbConfig, err => {
//     if (err){
//       console.log("Error while connecting database :- " + err);
//       res.send(err);
//       return;
//     }
//     let request = new sql.Request();
//     request.query(query, (err, result) => {
//       if (err) {
//         console.log("Error while querying database :- " + err);
//         res.send(err);
//         return;
//         }
//       res.json(result);
//     });
//   }));

var executeQuery = async (res, query) => {
  try {
    let connection = await sql.connect(dbConfig);
    let request = new sql.Request();
    let result = await request.query(query);
    res.json(result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

app.get('/api/movies', (req, res) => executeQuery(res, 'select * from [user]'));

app.post('/api/movies', (req, res) => {
  let query = `INSERT INTO [movies] (id,imageUrl,title,director,year) VALUES (${req.body.id},${
    req.body.imageUrl
  },${req.body.title},${req.body.director},${req.body.year});`;
  executeQuery(res, query);
});

app.put('/api/movies/:id', (req, res) => {
  let query = `UPDATE [movies] SET Name=${req.body.Name}, Email=${req.body.Email} WHERE Id=${req.params.id};`;
  executeQuery(res, query);
});

app.delete('/api/movies /:id', (req, res) => {
  let query = 'DELETE FROM [movies] WHERE Id=' + req.params.id;
  executeQuery(res, query);
});

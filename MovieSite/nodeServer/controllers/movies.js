const express = require('express');
const router = express.Router();
const movies = require('../model/movies');
const connection = require('../model/connection');

router.get('/api/movies', (req, res) => movies.executeQuery(res, 'select * from [user]'));

router.post('/api/movies', (req, res) => {
  let query = `INSERT INTO [movies] (id,imageUrl,title,director,year) VALUES (${req.body.id},${
    req.body.imageUrl
  },${req.body.title},${req.body.director},${req.body.year});`;
  movies.executeQuery(res, query);
});

router.put('/api/movies/:id', (req, res) => {
  let query = `UPDATE [movies] SET Name=${req.body.Name}, Email=${req.body.Email} WHERE Id=${req.params.id};`;
  movies.executeQuery(res, query);
});

router.delete('/api/movies /:id', (req, res) => {
  let query = 'DELETE FROM [movies] WHERE Id=' + req.params.id;
  movies.executeQuery(res, query);
});

module.exports = router;

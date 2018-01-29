const express = require('express');
const cors = require('cors');
const app = express();

app.listen(4000, () => console.log('port 4000'));

app.use(cors());

app
  .get('/', (req, res) => res.json('get this shit from me'))
  .post('/', (req, res) => res.json('post from server'));

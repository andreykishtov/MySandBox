const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = '3500';

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => console.log(`server listening On ${port}`));

app.use('/movies', require('./controllers/movies'));

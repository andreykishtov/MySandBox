const express = require('express');

const port = '3500';

const app = express();

app.listen(port, () => console.log(`server listening On ${port}`));

app.get('/', () => console.log('works'));

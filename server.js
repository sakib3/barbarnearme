const express = require('express');
const config = require('./config');
const app = express();

app.get('/', (req, res) => res.send('Hello From BarBar Shop!'));

app.listen(config.port, () => console.log('Example app listening on port '+config.port+'!'))
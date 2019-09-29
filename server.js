const bodyParser = require('body-parser')
const express = require('express');
const mongo = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongo.connect(
    'mongodb://localhost:27017/clock_store',
    {useNewUrlParser: true}

);
require('./src/models/clock');
app.use('/',require('./src/routes'));

const PORT = 3000;
app.listen(PORT);
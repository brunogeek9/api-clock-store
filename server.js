const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 3001;
app.listen(PORT,()=>console.info('server running !!'));
mongoose.connect(
    'mongodb://localhost:27017/clock_store',
    {useNewUrlParser: true, useUnifiedTopology: true}

);
require('./src/models/clock');
app.use('/',require('./src/routes'));



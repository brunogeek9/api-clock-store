let express = require('express');
let app = express();
app.use(express.json());
const mongo = require("mongoose");
const PORT = 3001;

mongo.connect(
    'mongodb://localhost:27017/clock_store',
    {useNewUrlParser: true}

);
require('./models/clock');
app.use('/',require('./routes'));

app.listen(PORT,()=>console.info('server running !!'));

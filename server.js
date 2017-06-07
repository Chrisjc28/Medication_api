const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dbOptions = require('./config/db');
require('./app/models/medication.js');
const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, () => {
    console.log('DB connected');
    console.log('We are live on ' + port);
});

require('./app/routes')(app);

mongoose.Promise  = global.Promise;
mongoose.connect(process.env.MONGODB_URI || dbOptions.url); // change this url

const db = mongoose.connection;

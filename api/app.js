const express = require('express');
const app = express();


const controller = require('./contollers/controller')


app.use('/api', controller)
module.exports = app;
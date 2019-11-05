const bodyParser = require('body-parser');
const cors = require("cors");
const path = require("path")

const express = require('express');
const app = express();

app.use('/public', express.static('public'));

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


const rotas = require('../routes/routes');
rotas(app, path);

module.exports = app;
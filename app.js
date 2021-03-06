'use strict'

// Node modules
require('dotenv').config();
var express = require('express');
var compression = require('compression');
var bodyParser = require('body-parser');
const path = require('path');

// Express.js
var app = express();

// Middlewares
app.use(compression());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './view/')));


// CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// Routes
app.get('/es/home', (req, res) => {
    res.sendFile(path.join(__dirname, './view/index.html'));
});

app.get('/en/home', (req, res) => {
    res.sendFile(path.join(__dirname, './view/index.html'));
});

app.get('/es/projects', (req, res) => {
    res.sendFile(path.join(__dirname, './view/index.html'));
});

app.get('/en/projects', (req, res) => {
    res.sendFile(path.join(__dirname, './view/index.html'));
});

app.get('/es/contact', (req, res) => {
    res.sendFile(path.join(__dirname, './view/index.html'));
});

app.get('/en/contact', (req, res) => {
    res.sendFile(path.join(__dirname, './view/index.html'));
});

var project_routes = require('./routes/project');

app.use('/api', project_routes);


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './view/index.html'));
});


// Export this module
module.exports = app;
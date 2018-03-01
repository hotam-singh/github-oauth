'use strict';

//Loading environment variable from a file
require('dotenv').config({ path: '/etc/config/github-oauth/.env' });

//Requiring dependencies
var express = require('express')
    , session = require('express-session')
    , config = require('./config')
    , path = require('path');

// Intanstiate the app    
var app = express();

// Configure grant
var Grant = require('grant-express');
var grant = new Grant(require('./config'));
app.use(express.static(path.join(__dirname, '/')));
app.use(session({ secret: 'grant' }));
app.use(grant);

app.listen(8082, function () {
    console.log('server running on port : 8082');
});

app.get('/', function (req, res) {
    //res.send('Welcome to github-oauth example');
    res.sendFile(__dirname + '/index.html');
});

// Handling callback redirected from GitHub
app.get('/handle_github_callback', function (req, res) {
    const { error, error_description, error_uri } = req.query
    if (error) {
        res.status(500).json({
            error,
            error_description,
            error_uri
        })
    } else {
        console.log(req.query)
        res.end(JSON.stringify(req.query, null, 2))
    }
});

// Handling callback redirected from GitHub
app.get('/handle_facebook_callback', function (req, res) {
    const { error, error_description, error_uri } = req.query
    if (error) {
        res.status(500).json({
            error,
            error_description,
            error_uri
        })
    } else {
        console.log(req.query)
        res.end(JSON.stringify(req.query, null, 2))
    }
});
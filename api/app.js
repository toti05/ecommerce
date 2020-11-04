const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const route = require('./route/index');
const server = express();

//buscar 
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));

server.use(morgan('dev'));
server.use('/', route);

module.exports = server;
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { populateRouter } = require('../router');

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.use('/', populateRouter());

module.exports = { app };

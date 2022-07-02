const express = require('express');
const cors = require('cors');
const compression = require('compression');
const morgan = require('morgan');

// requiring routes
const userRoute = require('./routes/users');

const app = express();

// global middlewares
// implement CORS
app.use(cors());

// Access-Controll-Allow-Origin
app.options('*', cors());

// development logging
if (app.get('env') === 'development') {
  app.use(morgan('dev'));
}

// compression middleware
app.use(compression());

// route middleware
app.use('/api/v1/users', userRoute);

module.exports = app;

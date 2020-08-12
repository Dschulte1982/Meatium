const express = require('express');
const morgan = require('morgan');
const csrfProtection = require('csurf')({ cookie: true });

const pagesRouter = require('./routes/pages');
const apiRouter = require('./routes/api');

const app = express();
app.use(morgan('dev'));
app.use(require('cookie-parser')());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.set('view engine', 'pug');

//Sets the timeout so that the app does not infinitely attempt to load assets.
app.use((req, res, next) => {
    res.setTimeout(1000);
    req.setTimeout(1000);

    next();
});

//Routers
app.use('/public', express.static('public'));
app.use('/api', apiRouter);
app.use('/', pagesRouter);




module.exports = app;

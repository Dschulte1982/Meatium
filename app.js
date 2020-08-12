const express = require('express');
const app = express();

const pagesRouter = require('./routes/pages');
const apiRouter = require('./routes/api');

app.set('view engine', 'pug');

const morgan = require('morgan');

app.use(morgan('dev'));
app.use(require('cookie-parser')());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Sets the timeout so that the app does not infinitely attempt to load assets.
app.use((req, res, next) => {
    res.setTimeout(1000);
    req.setTimeout(1000);

    next();
});

//Routers
app.use('/public', express.static('public'));
app.use('/', pagesRouter);
app.use('/api', apiRouter);

var port = Number.parseInt(process.env.PORT, 10) || 8080;
app.listen(port, () => {
  console.log(`Listening for requests on port ${port}...`);
});

module.exports = app;

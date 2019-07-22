const createError = require('http-errors');
const express = require('express');
const chalk = require('chalk');
const bodyParser = require('body-parser');
const compression = require('compression')
const logger = require('morgan');

const indexRouter = require('./routes/index');

const app = express();

const port = process.env.PORT || 8000

// use compression to gzip response body
app.use(compression())

app.use(logger('dev'));

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404, 'Route not found'));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});


console.log(chalk.red(`Magic happens at http://localhost:${port}/api 👍`))

process.on('SIGINT', () => { console.log(chalk.red('Bye bye 👋')); process.exit() })

app.listen(port, '0.0.0.0')

module.exports = app;

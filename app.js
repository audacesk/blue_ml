var createError = require('http-errors');
var express = require('express');
var chalk = require('chalk');
var bodyParser = require('body-parser');
var compression = require('compression')
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();

const port = process.env.PORT || 8000

// use compression to gzip response body
app.use(compression())

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', indexRouter);

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


console.log(chalk.red(`Magic happens at http://localhost:${port}/ 👍`))

process.on('SIGINT', () => { console.log(chalk.red('Bye bye 👋')); process.exit() })

app.listen(port, '0.0.0.0')

module.exports = app;

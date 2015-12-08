var mongoose = require('mongoose');
//Lets connect to our database using the DB server URL.
mongoose.connect('mongodb://localhost:27017/Backpacker');

var flash    = require('connect-flash');
var express = require('express');
var routes = require('./routes');
var passport = require('passport');
var validation = require("validator");
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.get('/partials/:name', routes.partials);


app.set('port', process.env.PORT || 6060);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index );

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

require('./mainController')(app);
require('./mainControllerService')(app);

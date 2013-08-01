/**
 * Module dependencies.
 */

var express = require('express')
    , routes = require('./helpers/routes')
    , home = require('./routes/home')
    , posts = require('./routes/posts')
    , htmlHelpers = require('./helpers/htmlHelpers')
    , utils = require('./helpers/util')
    , http = require('http')
    , path = require('path')
    , moment = require('moment')
    , showDown = require('showDown');

var app = express();
var l = new utils.Logger();
var showdown = new showDown.converter();

// all environments

app.configure('development', function () {
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

//home
app.get('/', home.index);
app.get('/about', home.about);

//posts
app.get('/posts', posts.index);
app.get('/posts/:post_id', posts.details);

//locals
//routes local used in view so we have one central location to store routes
app.locals.routes = routes;
app.locals.helpers = htmlHelpers.helpers;
app.locals.fromNow = function (date) {
    if (date) {
        return moment(date).fromNow();
    }
    return '';
};
app.locals.markDown = function (input) {
    if (input) {
        return showdown.makeHtml(input);
    }
    return '';
};

l.log(htmlHelpers.helpers.postLink({id: 1, title: 'title', author: 'author'}));

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

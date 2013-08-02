/**
 * Module dependencies.
 */

var express = require('express')
    , expressValidator = require('express-validator')
    , node = require('./node').node
    , home = require('./routes/home')
    , posts = require('./routes/posts')
    , htmlHelpers = require('./helpers/htmlHelpers').helpers
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
    app.use(expressValidator());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

//home
app.get(node.home.index, home.index);
app.get(node.home.about, home.about);

//posts
app.get(node.posts.index, posts.index);
app.get(node.posts.create, posts.create);
app.get(node.posts.details, posts.details);

app.post(node.posts.create, posts.createPost);


//locals
app.locals.node = node;
app.locals.html = htmlHelpers;

//todo: move these locals in helpers
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

app.locals.toTitleCase = function(str){
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

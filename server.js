/**
 * Module dependencies.
 */

var express = require('express')
    , expressValidator = require('express-validator')
    , node = require('./nodemvc').node
    , routes = require('./routes')
    , home = require('./routes/home')
    , posts = require('./routes/posts')
    , auth = require('./routes/authentication')
    , htmlHelpers = require('./helpers/htmlHelpers')
    , utils = require('./helpers/util')
    , http = require('http')
    , path = require('path')
    , moment = require('moment')
    , showDown = require('showDown');

var app = express();
var l = new utils.Logger();
var showdown = new showDown.converter();

//todo move this into seperate class
var authenticated = function (req, res, next) {
    if (req.session.user && req.session.user.isAuthenticated) {
        res.locals.user = req.session.user;
        next();
    } else {
        res.redirect(node.auth.login);
    }
}

var notFound = function (req, res, next) {
    res.statusCode = 404;
    res.description = 'Not found';
    res.render(node.errors.views.notFound);
};

var errorHandler = function (err, req, res, next) {
    console.log(err);
    res.statusCode = 500;
    res.description = 'Server Error';
    if (err) {
        res.render(node.errors.views.problem);
    }
}

//config all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.cookieParser('random passphrase'));
app.use(express.session());
app.use(expressValidator());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.use("/test",express.static(path.join(__dirname, 'test')));
//custom route to support e2e
app.use("/base/test",express.static(path.join(__dirname, 'test')));


app.use(notFound);

app.configure('development', function () {
    //dev config
});

app.configure('production',function(){
    app.use(errorHandler);
});

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

//handle angular partials
app.get('/partials/:name', routes.partials);

//home
app.get(node.home.index, home.index);
app.get(node.home.about, authenticated, home.about);

//auth
app.get(node.auth.login, auth.login);
app.post(node.auth.login, auth.loginUser);

app.get(node.auth.logout, auth.logout);

//posts
app.get(node.posts.index, posts.index);
app.get(node.posts.details, posts.details);

app.get(node.posts.create, authenticated, posts.create);
app.get(node.posts.edit, authenticated, posts.edit);

app.post(node.posts.edit, authenticated, posts.update);
app.post(node.posts.create, authenticated, posts.createPost);

//locals
app.locals.node = node;
app.locals.html = htmlHelpers;
app.locals.isAngular = true;

//todo: move these locals into helpers
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
app.locals.toTitleCase = function (str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
};

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

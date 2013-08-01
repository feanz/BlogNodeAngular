//home page route
var routes = require("../helpers/routes");

exports.index = function (req, res) {
    res.redirect(routes.posts);
};

exports.about = function (req, res) {
    res.render('home/about', {title: 'About'});
}
var node = require("../nodemvc").node;

exports.login = function (req, res) {
    res.render(node.auth.views.login, {title: 'Login'});
};

exports.loginUser = function (req, res) {
    if (req.body.username == 'admin' && req.body.password == 'password1') {
        console.log('auth');
        req.session.user = {isAuthenticated: true, username: req.body.username, roles: { isAdmin: true }};
        res.redirect(node.posts.index);
    } else if (req.body.username == 'user' && req.body.password == 'password1') {
        req.session.user = {isAuthenticated: true, username: req.body.username, roles: { user: true }};
        res.redirect(node.posts.index);
    } else {
        res.redirect(node.auth.login);
    }
};

exports.logout = function(req,res){
    req.session.user = null;
    res.redirect(node.home.index);
};

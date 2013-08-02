var node = require("../node").node;

exports.index = function (req, res) {
    res.redirect(node.posts.index);
};

exports.about = function (req, res) {
    res.render(node.home.about, {title: 'About'});
}
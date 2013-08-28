var node = require("../nodemvc").node;

exports.index = function (req, res) {
    console.log('home index');
    res.render(node.home.views.index, {title:'BlogR'});
};

exports.about = function (req, res) {
    res.render(node.home.views.about, {title: 'About'});
}
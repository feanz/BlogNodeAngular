var node = require("../node").node;
var repo = require('../postsRepository');

exports.index = function (req, res) {
    repo.listPosts(function (err, posts) {
        res.render(node.posts.views.index, {title: 'Posts', posts: posts});
    });
};

exports.create = function (req, res) {
    var post = new Post();
    res.render(node.posts.views.create, {title: 'Create Post', post: post});
};

exports.createPost = function (req, res) {
    var errors = validatePosts(req);
    var post = new Post(req.body);
    if (errors) {
        post.errors = errors
        console.log(post);
        res.render(node.posts.views.create, {title: 'Create Post', post: post});
    } else {
        repo.addPosts(post, function (err, result) {
            if (!err) {
                res.redirect(node.posts.index);
            } else {
                post.errors = {msg: err.message};
                res.render(node.posts.views.create, {title: 'Create Post', post: post});
            }
        });
    }
};

exports.details = function (req, res) {
    var viewModel = {};
    var id = req.params.post_id;
    repo.listPosts(function (err, postList) {
        if (!err && postList) {
            viewModel.posts = postList;
            repo.getPostById(id, function (err, post) {
                if (err || !post) {
                    console.log('no post found');
                    res.send(404);
                } else {
                    viewModel.title = post.title;
                    viewModel.activePost = post;
                    res.render(node.posts.views.details, viewModel);
                }
            });
        }
    });
};

var Post = function (post) {
    if (post) {
        this.title = (post && post.title) ? post.title : '';
        this.intro = (post && post.intro) ? post.intro : '';
        this.extended = (post && post.extended) ? post.extended : '';
        this.publishedAt = (post && post.publishedAt) ? post.publishedAt : new Date();
        this.author = (post && post.author) ? post.author : 'Dean Titface';
    } else {
        this.title = '';
        this.intro = '';
        this.extended = '';
    }
}

var validatePosts = function (req) {
    req.checkBody('title', { len: 'Max length 30', notEmpty: 'Title field Required'}).len(1,30).notEmpty();
    req.checkBody('intro', 'is Required').notEmpty();
    req.checkBody('extended', 'is Required').notEmpty();

    return req.validationErrors(true);
}
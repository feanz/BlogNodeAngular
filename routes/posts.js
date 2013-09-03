var node = require("../nodemvc").node;
var repo = require('../postsRepository');

exports.index = function (req, res) {
    repo.listPosts(function (err, posts) {
        if(!err){
            res.format({
                html: function(){
                    res.render(node.posts.views.index, {title: 'Posts', posts: posts});
                },
                json: function(){
                    res.json(posts);
                }
            });
        }else{
            res.send(404, "Not found");
        }
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

exports.edit = function (req, res) {
    var viewModel = {};
    var id = req.params.post_id;

    repo.getPostById(id, function (err, post) {
        if (err || !post) {
            console.log('no post found');
            res.send(404);
        } else {
            viewModel.title = 'Edit Post';
            viewModel.post = post;
            res.render(node.posts.views.edit, viewModel);
        }
    });
};

exports.update = function(req, res){
    console.log('update post')
    var errors = validatePosts(req);
    var post = new Post(req.body);
    if (errors) {
        post.errors = errors
        res.format({
            html:function(){res.render(node.posts.views.edit, {title: 'Edit Post', post: post})},
            json:function(){res.json(400,post)}
        });
    }else{
        repo.updatePosts(post, function (err, result) {
            if (!err) {
                res.format({
                    html:function(){
                        res.redirect(node.posts.detailsRoute(post));
                    },
                    json:function(){
                        res.json(200, post);
                    }
                });
            } else {
                console.log(err);
                post.errors = {msg: err.message};
                res.format({
                    html:function(){
                        res.render(node.posts.views.edit, {title: 'Edit Post', post: post});
                    },
                    json:function(){
                        res.json(500, err.message);
                    }
                });
            }
        });
    }
};

exports.details = function (req, res) {
    var id = req.params.post_id;
    res.format({
        html: function(){
            return htmlDetailsRequest(id, res)
        },
        json: function(){
            repo.getPostById(id, function (err, post) {
                if (err || !post) {
                    res.send(404, err.message);
                } else {
                    res.json(post);
                }
            });
        }
    });
};

var htmlDetailsRequest = function(id,res){
    console.log('html')
    var viewModel = {};
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
    this.id = (post && post.id) ? post.id : 0;
    this.title = (post && post.title) ? post.title : '';
    this.intro = (post && post.intro) ? post.intro : '';
    this.extended = (post && post.extended) ? post.extended : '';
    this.publishedAt = (post && post.publishedAt) ? post.publishedAt : new Date();
    this.author = (post && post.author) ? post.author : 'Dean Titface';
}

var validatePosts = function (req) {
    req.checkBody('title', { len: 'Max length 30', notEmpty: 'Title field Required'}).len(1, 30).notEmpty();
    req.checkBody('intro', 'is Required').notEmpty();
    req.checkBody('extended', 'is Required').notEmpty();

    return req.validationErrors(true);
}
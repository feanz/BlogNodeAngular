var repo = require('../postsRepository');

exports.index = function (req, res) {
    repo.listPosts(function (err, posts) {
        res.render("posts/index", {title: 'Posts', posts: posts});
    });
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
                    res.render('posts/details', viewModel);
                }
            });
        }
    });

};
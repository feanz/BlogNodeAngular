//a t4mvc style helper
var node = {};

var posts = {
    index: '/posts',
    create: '/posts/create',
    details: '/posts/:post_id',
    detailsRoute: function (post) {
        return '/posts/' + post.id;
    },
    views: {
        index:'posts/index',
        details:'posts/details',
        create:'posts/create'
    }
};

var home = {
    index:'/',
    about: '/about',
    views: {
        home: 'home/index',
        about: 'home/about'
    }
}

node.home = home;
node.posts = posts;

exports.node = node;
postsDb = new Array();
postsDb[0] = {id: 1, title: 'Why i love node', author: 'Steve Ballbag', published: new Date(2013,06,14),
    intro: "Small intro text goes in this field",
    extended:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris enim dolor, iaculis sed libero posuere, dapibus molestie sapien. In hac habitasse platea dictumst. Donec quis rhoncus nulla. Maecenas elementum euismod neque at commodo. Vivamus tincidunt interdum sapien, vel rhoncus mi volutpat a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus sagittis mollis dolor, volutpat tincidunt mi vestibulum in. Vestibulum vitae lectus ornare, cursus purus posuere, euismod ipsum. Aenean eleifend eros eu odio ultrices, ac sollicitudin nulla congue. Cras ultrices cursus sodales. Donec ac sem nunc. Maecenas ut semper dui, et faucibus eros. Pellentesque ultricies ac massa quis tempor. Pellentesque metus lorem, interdum at urna a, pellentesque vehicula augue. Donec auctor ultrices mauris.\
        Praesent dolor massa, pulvinar sit amet orci sed, lacinia mattis nisi. Nam at mattis justo. Sed consectetur porttitor adipiscing. Curabitur iaculis felis vitae viverra aliquet. In hac habitasse platea dictumst. Donec et justo mauris. Nunc facilisis sapien id magna sollicitudin malesuada. Fusce vehicula enim in vehicula viverra. Cras sed metus odio. Curabitur tincidunt eget ipsum quis suscipit. Praesent scelerisque ante at lorem accumsan, quis ornare elit tempor. Sed lobortis iaculis sapien sed malesuada. Fusce posuere venenatis ipsum, ut dapibus leo condimentum nec. Nulla dapibus nisi urna, vitae vehicula mauris commodo eu.\
        Integer consectetur tellus a ultricies fermentum. Fusce a est a massa congue accumsan mattis eu dui. Praesent feugiat est felis, a mollis purus hendrerit vitae. Cras laoreet felis a dui feugiat, vel aliquet enim bibendum. Suspendisse luctus rutrum porttitor. Vestibulum ligula lorem, egestas in odio id, semper consectetur nunc. Ut posuere nibh ultricies turpis sollicitudin sodales. Vestibulum fermentum erat non nisi aliquam pharetra. Proin congue pellentesque dui, non ultricies mau"},
postsDb[1] = {id: 2, title: 'Is Scarla the new lisp', author: 'Nick Dicksplash', published: new Date(2013,05,27),
    intro: "Small intro text goes in this field",
    extended:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris enim dolor, iaculis sed libero posuere, dapibus molestie sapien. In hac habitasse platea dictumst. Donec quis rhoncus nulla. Maecenas elementum euismod neque at commodo. Vivamus tincidunt interdum sapien, vel rhoncus mi volutpat a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus sagittis mollis dolor, volutpat tincidunt mi vestibulum in. Vestibulum vitae lectus ornare, cursus purus posuere, euismod ipsum. Aenean eleifend eros eu odio ultrices, ac sollicitudin nulla congue. Cras ultrices cursus sodales. Donec ac sem nunc. Maecenas ut semper dui, et faucibus eros. Pellentesque ultricies ac massa quis tempor. Pellentesque metus lorem, interdum at urna a, pellentesque vehicula augue. Donec auctor ultrices mauris.\
        Praesent dolor massa, pulvinar sit amet orci sed, lacinia mattis nisi. Nam at mattis justo. Sed consectetur porttitor adipiscing. Curabitur iaculis felis vitae viverra aliquet. In hac habitasse platea dictumst. Donec et justo mauris. Nunc facilisis sapien id magna sollicitudin malesuada. Fusce vehicula enim in vehicula viverra. Cras sed metus odio. Curabitur tincidunt eget ipsum quis suscipit. Praesent scelerisque ante at lorem accumsan, quis ornare elit tempor. Sed lobortis iaculis sapien sed malesuada. Fusce posuere venenatis ipsum, ut dapibus leo condimentum nec. Nulla dapibus nisi urna, vitae vehicula mauris commodo eu.\
        Integer consectetur tellus a ultricies fermentum. Fusce a est a massa congue accumsan mattis eu dui. Praesent feugiat est felis, a mollis purus hendrerit vitae. Cras laoreet felis a dui feugiat, vel aliquet enim bibendum. Suspendisse luctus rutrum porttitor. Vestibulum ligula lorem, egestas in odio id, semper consectetur nunc. Ut posuere nibh ultricies turpis sollicitudin sodales. Vestibulum fermentum erat non nisi aliquam pharetra. Proin congue pellentesque dui, non ultricies mau"},
postsDb[2] = {id: 3, title: 'Should i bother with testing', author: 'Steve Ballbag', published: new Date(2013,03,21),
    intro: "Small intro text goes in this field",
    extended:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris enim dolor, iaculis sed libero posuere, dapibus molestie sapien. In hac habitasse platea dictumst. Donec quis rhoncus nulla. Maecenas elementum euismod neque at commodo. Vivamus tincidunt interdum sapien, vel rhoncus mi volutpat a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus sagittis mollis dolor, volutpat tincidunt mi vestibulum in. Vestibulum vitae lectus ornare, cursus purus posuere, euismod ipsum. Aenean eleifend eros eu odio ultrices, ac sollicitudin nulla congue. Cras ultrices cursus sodales. Donec ac sem nunc. Maecenas ut semper dui, et faucibus eros. Pellentesque ultricies ac massa quis tempor. Pellentesque metus lorem, interdum at urna a, pellentesque vehicula augue. Donec auctor ultrices mauris.\
        Praesent dolor massa, pulvinar sit amet orci sed, lacinia mattis nisi. Nam at mattis justo. Sed consectetur porttitor adipiscing. Curabitur iaculis felis vitae viverra aliquet. In hac habitasse platea dictumst. Donec et justo mauris. Nunc facilisis sapien id magna sollicitudin malesuada. Fusce vehicula enim in vehicula viverra. Cras sed metus odio. Curabitur tincidunt eget ipsum quis suscipit. Praesent scelerisque ante at lorem accumsan, quis ornare elit tempor. Sed lobortis iaculis sapien sed malesuada. Fusce posuere venenatis ipsum, ut dapibus leo condimentum nec. Nulla dapibus nisi urna, vitae vehicula mauris commodo eu.\
        Integer consectetur tellus a ultricies fermentum. Fusce a est a massa congue accumsan mattis eu dui. Praesent feugiat est felis, a mollis purus hendrerit vitae. Cras laoreet felis a dui feugiat, vel aliquet enim bibendum. Suspendisse luctus rutrum porttitor. Vestibulum ligula lorem, egestas in odio id, semper consectetur nunc. Ut posuere nibh ultricies turpis sollicitudin sodales. Vestibulum fermentum erat non nisi aliquam pharetra. Proin congue pellentesque dui, non ultricies mau"}


id_inc = 3;

exports.listPosts = function (callback) {
    var err;
    callback(err, postsDb);
};

exports.addPosts = function (post, callback) {
    var err;
    id_inc = id_inc + 1;
    post.id = id_inc;
    postsDb[post.id] = post;
    callback(err, post);
};

exports.getPostById = function (id, callback) {
    var err;
    var post = postsDb[id];

    if (!post) {
        err = {message: 'No post found'};
    }
    callback(err, post);
};

exports.deletePost = function (id, callback) {
    var err;
    postsDb[id].remove();
    callback(err);
};

exports.updatePosts = function (post, callback) {
    var err;
    var existing = postsDb[post.id];

    if (!existing) {
        err = { message: 'No post found'};
    } else {
        postsDb[post.id] = post;
    }

    callback(err, post);
};
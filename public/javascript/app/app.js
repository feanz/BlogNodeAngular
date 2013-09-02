angular.module('blogR', []).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/posts', {templateUrl: 'partials/post-index.jade',   controller: PostsController}).
            when('/posts/:postId', {templateUrl: 'partials/post-details.jade', controller: PostDetailsController}).
            otherwise({redirectTo: '/posts'});
    }]);

angular.module('blogR', ['postFilters']).
    config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
        //commenting out this line (switching to hashbang mode) breaks the app
        //-- unless # is added to the templates
        $locationProvider.html5Mode(true);

        $routeProvider.
            when('/posts', {templateUrl: 'partials/post-index.jade',   controller: PostsController}).
            when('/posts/:postId', {templateUrl: '/partials/post-details.jade', controller: PostDetailsController}).
            when('/login', {templateUrl: '/partials/login.jade', controller: AuthenticationController}).
            otherwise({redirectTo: '/posts'});
    }]);





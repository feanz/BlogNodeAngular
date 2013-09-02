function PostsController($scope, $http) {
    $http.get('posts').success(function(data) {
        $scope.posts = data;
    });

    $scope.orderProp = 'published';
}
PostsController.$inject = ['$scope', '$http'];


function PostDetailsController($scope, $routeParams, $http) {
    $http.get('posts/' + $routeParams.postId).success(function(data) {
        $scope.post = data;
    });
}

PostDetailsController.$inject = ['$scope', '$routeParams', '$http'];
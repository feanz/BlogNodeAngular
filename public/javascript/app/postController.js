function PostsController($scope, $http) {
    $http.get('posts').success(function(data) {
        console.log(data);
        $scope.posts = data;
    });

    $scope.orderProp = 'published';
}
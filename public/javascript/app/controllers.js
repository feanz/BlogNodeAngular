function PostsController($scope, $http) {
    $http.get('/posts').success(function(data) {
        $scope.posts = data;
    });

    $scope.orderProp = 'published';
}
PostsController.$inject = ['$scope', '$http'];


function PostDetailsController($scope, $routeParams, $http) {
    $http.get('/posts/' + $routeParams.postId).success(function(data) {
        $scope.post = data;
    });

    $scope.tags = ['node','scarla','lisp','testing'];

    $scope.editMode = false;
    $scope.editPost = {};

    $scope.setEditMode = function(){
        angular.copy($scope.post, $scope.editPost);
        $scope.editMode = true;
    };

    $scope.save = function(){
        console.log('save');
        $http.post('/posts/edit/' + $scope.post.id, $scope.editPost).success(function(data){
            $scope.editMode = false;
        });
    }

    $scope.cancel = function(){
        angular.copy($scope.editPost, $scope.post);
        $scope.editMode = false;
    }
}

PostDetailsController.$inject = ['$scope', '$routeParams', '$http'];

function AuthenticationController($scope,$http){

    $scope.login = function() {
        $http.post('/login', $scope.user).success(function(data){
            console.log('yes')
        });
    };
}

AuthenticationController.$inject = ['$scope', '$http'];
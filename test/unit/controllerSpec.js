describe('BlogR controllers', function() {

    describe('Posts Controller', function(){

        var scope, ctrl, $httpBackend;

        // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
        // This allows us to inject a service but then attach it to a variable
        // with the same name as the service.
        beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.when('GET','/posts').
                respond([{title: 'Why i love node'},
                    {title: 'Is scarla the new lisp'}]);

            scope = $rootScope.$new();
            ctrl = $controller(PostsController, {$scope: scope});
        }));

        it('should create "posts" model with 2 posts fetched from xhr', function() {
            expect(scope.posts).toBeUndefined();

            $httpBackend.flush();

            expect(scope.posts).toEqual([{title: 'Why i love node'},
                {title: 'Is scarla the new lisp'}]);
        });

        it('should set the default value of orderProp model', function() {
            expect(scope.orderProp).toBe('published');
        });
    });

    describe('Post Details Controller', function(){
        var scope, $httpBackend, ctrl;

        beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.when('GET', '/posts/1').respond({title:'Why i love node'});

            $routeParams.postId = '1';

            scope = $rootScope.$new();
            ctrl = $controller(PostDetailsController, {$scope: scope});
        }));

        it('should set editMode to true on setEditMode', function() {
            expect(scope.editMode).toEqual(false);

            scope.setEditMode();

            expect(scope.editMode).toEqual(true);
        });

        it('should edit post to a copy of post on setEditMode', function() {

            $httpBackend.flush();

            expect(isEmpty(scope.editPost)).toBe(true);

            scope.setEditMode();

            expect(scope.editPost).toEqual({title:'Why i love node'});
        });

        function isEmpty(obj) {
            return Object.keys(obj).length === 0;
        }

        it('should fetch post detail', function() {
            expect(scope.post).toBeUndefined();

            $httpBackend.flush();

            expect(scope.post).toEqual({title:'Why i love node'});
        });
    });
});

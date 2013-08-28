describe('BlogR controllers', function() {

    describe('Posts Controller', function(){

        var scope, ctrl, $httpBackend;

        // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
        // This allows us to inject a service but then attach it to a variable
        // with the same name as the service.
        beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.when('GET','posts').
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
});

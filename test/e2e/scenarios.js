describe('BlogR App', function() {

    describe('Posts View', function() {

        beforeEach(function() {
            browser().navigateTo('/');
        });

        it('should filter the posts list as user types into the search box', function() {
            expect(repeater('#posts li').count()).toBe(3);

            input('query').enter('I love');
            expect(repeater('#posts li').count()).toBe(1);

            input('query').enter('Steve');
            expect(repeater('#posts li').count()).toBe(2);
        });

        it('should be possible to control posts order via the drop down select box', function() {
            expect(repeater('#posts li', 'Posts List').row(0)).
                toEqual(["Should i bother with testing","Steve Ballbag"]);

            select('orderProp').option('Alphabetical');

            expect(repeater('#posts li', 'Posts List').row(0)).
                toEqual(["Is Scarla the new lisp","Nick Dicksplash"]);
        });

        it('should render post specific link', function() {
            input('query').enter('Why');

            element('#posts li a').click();

            expect(browser().location().url()).toBe('/posts/1');
        });
    });

    describe('Post Details View', function(){

        beforeEach(function(){
            browser().navigateTo('#/posts/1');
        })

        it('should display Why i love node post', function() {
            expect(binding('post.title')).toBe('Why i love node');
        });
    })
});
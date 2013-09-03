describe('filter', function() {

    beforeEach(module('postFilters'));

    describe('checkmark', function() {

        it('should convert value to unicode checkmark or cross',
            inject(function(checkmarkFilter) {
                expect(checkmarkFilter(1)).toBe('\u2713');
                expect(checkmarkFilter(-1)).toBe('\u2718');
            }));
    });
});
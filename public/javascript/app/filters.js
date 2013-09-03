angular.module('postFilters', []).filter('checkmark', function() {
    return function(input) {
        return input > -1 ? '\u2713' : '\u2718';
    };
});

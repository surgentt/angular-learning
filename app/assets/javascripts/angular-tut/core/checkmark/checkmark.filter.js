angular.
  module('core').
  filter('checkmark', function() {
    return function(input) {
      return input ? '\u2713' : '\u2718';
    };
  });

//The input evaluates to either true or false,
//and we return one of the two unicode characters we have chosen to represent true (\u2713 -> ✓) and false (\u2718 -> ✘)
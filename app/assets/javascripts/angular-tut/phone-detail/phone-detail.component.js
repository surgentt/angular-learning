angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'templates/phone-detail.html',
    controller: ['$routeParams', 'Phone',
      function PhoneDetailController($routeParams, Phone) {
        var self = this;


        self.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {

        });

        // $http.get('phones/' + $routeParams.phoneId + '.json').then(function(response) {
        //   self.phone = response.data;
        // });
      }
    ]
  });
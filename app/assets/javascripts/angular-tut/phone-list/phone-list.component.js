// Register `phoneList` component, along with its associated controller and template
angular.
  // Register the `phoneList` component on the `phoneList` module,
  module('phoneList').
  component('phoneList', {
    templateUrl: 'templates/phone-list.html',
    controller: ['$http',
      function PhoneListController($http) {
        var self = this;
        this.orderProp = 'age';

        $http.get('phones/phones.json').then(function (response) {
          self.phones = response.data.slice(0, 5);
        });
      }
    ]
  });
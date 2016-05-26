// Register `phoneList` component, along with its associated controller and template
angular.
  // Register the `phoneList` component on the `phoneList` module,
  module('phoneList').
  component('phoneList', {
    templateUrl: 'templates/phone-list.html',
    controller: function PhoneListController() {
      this.phones = [
        {
          name: 'Nexus S',
          snippet: 'Fast just got faster with Nexus S.'
        }, {
          name: 'Motorola XOOM™ with Wi-Fi',
          snippet: 'The Next, Next Generation tablet.'
        }, {
          name: 'MOTOROLA XOOM™',
          snippet: 'The Next, Next Generation tablet.'
        }
      ];
    }
  });
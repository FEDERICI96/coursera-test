(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'list.html',
    scope: {
      found: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'controller',
    bindToController: true
  };
  return ddo;
}

function FoundItemsDirectiveController(){var controller = this}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var controller = this;
  controller.searchTerm = "";
  

  controller.search = function () {
    var promise = MenuSearchService.getMatchedMenuItems(controller.searchTerm);
    promise.then(function (response) {
      controller.found = response
      console.log(controller.found)
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    });
  }

  controller.removeItem = function (itemIndex) {
    MenuSearchService.removeItem(controller.found,itemIndex);
  };
}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
  var service = this;

  service.removeItem = function (items,itemIndex) {
    items.splice(itemIndex, 1);
  };

  service.getMatchedMenuItems = function (searchTerm){
    return $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
    }).then(function (result) {
      var foundItems = []
      for (var i=0;i < result.data.menu_items.length;i++)
        {
          var str = result.data.menu_items[i].description;
          if(str.includes(searchTerm)) {foundItems.push(result.data.menu_items[i])}
        }
      return foundItems;
  });
  }
}

})();
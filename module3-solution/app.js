(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService);


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var controller = this;
  controller.searchTerm = "";

  controller.search = function () {
    var promise = MenuSearchService.getMatchedMenuItems(controller.searchTerm);
    promise.then(function (response) {
      console.log("a"+response)
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    });
  }
  

/*   promise.then(function (response) {
    menu.categories = response.data;
  })
  .catch(function (error) {
    console.log("Something went terribly wrong.");
  });

  menu.logMenuItems = function (shortName) {
    var promise = MenuSearchService.getMenuForCategory(shortName);

    promise.then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
  }; */

}


MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
  var service = this;

  /* service.getMenuCategories = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    });

    return response;
  };
 */

/*   service.getMenuForCategory = function (shortName) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: shortName
      }
    });

    return response;
  }; */

  service.getMatchedMenuItems = function (searchTerm){
    return $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json"),
      params: {
        description: searchTerm
      }
    }).then(function (result) {
      // process result and only keep items that match
      //var foundItems...
      console.log(result);
      // return processed items
      //return foundItems;
  });
  }

}

})();
(function () {
'use strict';
    
angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
    var toBuy = this;
    toBuy.listToBuy = ShoppingListCheckOffService.getList1();
    console.log(listToBuy)
    toBuy.bought = function(itemIndex){
        ShoppingListCheckOffService.removeItem(itemIndex)
    }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController() {
    var Bought = this;
    Bought.listBought = ShoppingListCheckOffService.getList2;
}

function ShoppingListCheckOffService() {
    var service = this;

    var item1 = { name: "cookies", quantity: 1 };
    var item2 = { name: "pineapple", quantity: 2 };
    var item3 = { name: "pizza", quantity: 3 };
    var item4 = { name: "apple", quantity: 4 };
    var item5 = { name: "onion", quantity: 5 };

    var list1 = [item1, item2, item3, item4, item5];
    var list2 = [];

    service.addItem = function (item) {
        list2.push(item);
    };
    service.removeItem = function (itemIndex) {
        list1.splice(itemIndex, 1);
    };
    
    service.getList1 = function () {
        return list1;
    };
    service.getList2 = function () {
        return list2;
    };
}

})();
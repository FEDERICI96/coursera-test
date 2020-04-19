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
    toBuy.bought = function(itemIndex){
        ShoppingListCheckOffService.removeItem(itemIndex)
        toBuy.test1 = ShoppingListCheckOffService.isEmptyList1()
    }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;
    bought.listBought = ShoppingListCheckOffService.getList2();
}

function ShoppingListCheckOffService() {
    var service = this;

    var item1 = { name: "cookies", quantity: 10 };
    var item2 = { name: "pineapple", quantity: 25 };
    var item3 = { name: "pizza", quantity: 30 };
    var item4 = { name: "apple", quantity: 45 };
    var item5 = { name: "onion", quantity: 50 };

    var list1 = [item1, item2, item3, item4, item5];
    var list2 = [];

    service.removeItem = function (itemIndex) {
        list2.push(list1[itemIndex]);
        list1.splice(itemIndex, 1);
    };
    service.getList1 = function () {
        return list1;
    };
    service.getList2 = function () {
        return list2;
    };
    service.isEmptyList1 = function () {return list1.length; }
    service.isEmptyList2 = function () {return list2.length; }
}

})();
"use strict";
var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var person1 = new Person('Gourish');
console.log(person1);
var shoppingCart = (function () {
    function shoppingCart() {
        this.items = [];
    }
    shoppingCart.prototype.buy = function (item) {
        this.items.push(item);
    };
    return shoppingCart;
}());
var mobile = new shoppingCart();
mobile.buy('Mobile Phone');
console.log("forst instance : " + mobile.items);
var tv = new shoppingCart();
console.log("second instance : " + tv.items);
function todoList() {
    var x;
}
todoList.prototype = {
    items: []
};
var todo1 = new todoList();
todo1.items.push('homework');
console.log("first obj : " + todo1.items);
var todo2 = new todoList();
console.log("second obj : " + todo2.items);
console.log(todoList.prototype.items);
//# sourceMappingURL=classes.js.map
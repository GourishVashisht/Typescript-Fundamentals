"use strict";
function buyGoods(name, price, size) {
    return {
        name: 'gourish'
    };
}
function func(ar1, ar2) {
    var ar3 = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        ar3[_i - 2] = arguments[_i];
    }
    console.log(ar1);
    console.log(ar2);
    console.log(ar3);
    console.log.apply(console, ar3);
    ar3.forEach(function (i) {
        console.log(i);
    });
}
func('ap', 'man', 'hello1', 'hello2', 'hello3');
buyGoods('apple', 10);
//# sourceMappingURL=newFunction.js.map
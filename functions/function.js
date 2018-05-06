"use strict";
function sayHello(name) {
    return 'Hello ' + name;
}
console.log(sayHello('Gourish'));
var f = function (name) {
    return 'hello ' + name;
};
console.log(f('Rajesh'));
function fun1(firstName, lastName) {
    if (lastName)
        return 'Hello ' + firstName + " " + lastName;
    else
        return 'Hello ' + firstName;
}
console.log(fun1('Gourish'));
console.log(fun1('Gourish', 'Vashisht'));
//# sourceMappingURL=function.js.map
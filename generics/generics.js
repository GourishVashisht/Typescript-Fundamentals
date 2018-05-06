"use strict";
function func2(num) {
    console.log("Hello world");
    return num;
}
func2("gourish");
func2(10);
var GenericNumber = (function () {
    function GenericNumber(value) {
        this.add = function (x, y) {
            return x;
        };
        this.value = value;
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber(10);
myGenericNumber.add = function (x, y) { return x + y; };
//# sourceMappingURL=generics.js.map
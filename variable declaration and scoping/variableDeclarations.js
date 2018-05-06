"use strict";
for (var i = 0; i < 10; i++) {
    setTimeout(function () { return console.log(i); }, 100 * i);
}
for (var i = 0; i < 10; i++) {
    (function (value) {
        setTimeout(function () { return console.log(value); }, 100 * i);
    })(i);
}
var _loop_1 = function (i_1) {
    setTimeout(function () { console.log(i_1); }, 100 * i_1);
};
for (var i_1 = 0; i_1 < 10; i_1++) {
    _loop_1(i_1);
}
function fun(condition, x) {
    if (condition) {
        var x_1 = 100;
        return x_1;
    }
    return x;
}
console.log(fun(true, 10));
console.log(fun(false, 1));
//# sourceMappingURL=variableDeclarations.js.map
"use strict";
var arr;
arr = [1, 2, 3, 4, 5];
var a = arr[0], b = arr[1], c = arr[2];
console.log(a + " " + arr[0]);
console.log(b + " " + arr[1]);
var _a = [1, 2, 3, 4], first = _a[0], rest = _a.slice(1);
console.log(first);
console.log(rest);
console.log('The  first element of the remaining array is : ' + rest[0]);
var obj2 = {
    a: 'hello',
    b: true,
    c: 190
};
var newName1 = obj2.a, newName2 = obj2.b;
console.log(newName1);
console.log(newName2);
var first1 = [1, 2];
var second = [3, 4];
var bothPlus = [0].concat(first1, second, [5]);
console.log(bothPlus);
//# sourceMappingURL=destructuring.js.map
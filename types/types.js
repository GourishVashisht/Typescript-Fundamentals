"use strict";
var myName;
myName = 'Hello World !';
console.log(myName);
var rollNo = 10;
var str;
str = "Hello i am gourish and my roll no is " + rollNo;
console.log(str);
var num;
num = 10;
console.log(num);
num = 3;
console.log(num);
num = 0x1f;
console.log(num);
num = 19;
console.log(num);
var bool;
bool = true;
console.log(bool);
var arr1 = [];
arr1.push('Nitin');
arr1.push('Gourish');
arr1.push('Chetan');
console.log(arr1);
var arr2;
var arr3;
var obj;
obj = {
    a: 'hello',
    b: 10,
    c: true
};
console.log(obj);
var objArray = [];
var o1 = {
    a: 'hello',
    b: 90
};
var o2 = {
    a: 'world',
    b: 20
};
objArray.push(o1);
objArray.push(o2);
console.log(objArray);
var X;
var y;
var z;
var arr4;
arr4 = ["gourish", 10, true];
console.log(arr4);
console.log('First element of tuple is : ' + arr4[0]);
var color;
(function (color) {
    color["red"] = "red";
    color["green"] = "green";
    color["yellow"] = "yellow";
})(color || (color = {}));
console.log(color);
console.log(color.green);
console.log(color["green"]);
var unusable;
unusable = undefined;
//# sourceMappingURL=types.js.map
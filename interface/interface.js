"use strict";
function printLabel1(labelledObj) {
    console.log(labelledObj.label);
}
var myObj1 = { size: 10, label: "Size 10 Object" };
printLabel1(myObj1);
function printLabel2(labelledObj) {
    console.log(labelledObj.label);
}
var myObj2 = { size: 10, label: "Size 10 Object" };
printLabel2(myObj2);
var redPasta;
var whitePasta;
function typePasta() {
    return { taste: "great", price: 400 };
}
whitePasta = {
    sauce: "red",
    shape: "circular"
};
console.log(typePasta());
//# sourceMappingURL=interface.js.map
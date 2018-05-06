"use strict";
var Person1 = (function () {
    function Person1(name) {
        this.name = name;
    }
    Person1.prototype.greet = function () {
        console.log("Hello " + this.name);
    };
    return Person1;
}());
var p1 = new Person1('Gourish');
p1.greet();
var ab = (function () {
    function ab(name) {
        this.name = name;
    }
    return ab;
}());
var a1 = new ab('gourish');
var Employee = (function () {
    function Employee() {
        this._fullName = "";
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            this._fullName = newName;
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
var employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}
//# sourceMappingURL=acessSpecifiers.js.map
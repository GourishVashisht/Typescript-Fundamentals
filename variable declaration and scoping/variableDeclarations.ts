/**
 * Variables can be declared using
 * 1. var : function scpe and if two vars have same name they will be treated as same
 * 2. let : block scope and for every loop itertion it starts a new scope 
 * 3. const : same as let bu the value cannot be changed 
 */

// variables declared through (var) keyword can be accessable in whole function scope
for (var i = 0; i < 10; i++) {
    setTimeout(() => console.log(i), 100 * i)
}

// the o/p will 10 printed 10 times and this is because every timeout function has access to the
// same variable i whose final value after exiting for loop is 10

// A solution using IIFE
for (var i = 0; i < 10; i++) {
    (function (value) {
        setTimeout(() => console.log(value), 100 * i);
    })(i);
}

/**
 * let keyword
 * Rather than just introducing a new environment to the loop itself, these declarations sort of create 
 * a new scope per iteration. 
 */
for (let i = 0; i < 10; i++) {
    setTimeout(function () { console.log(i); }, 100 * i);
}

function fun(condition, x) {
    if (condition) {
        let x = 100;
        return x;
    }
    return x;
}
console.log(fun(true, 10))
console.log(fun(false, 1))
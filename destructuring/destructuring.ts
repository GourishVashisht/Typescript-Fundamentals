// Array destructuring

let arr: Array<number>
arr = [1, 2, 3, 4, 5]

let [a, b, c] = arr
console.log(a + " " + arr[0]);
console.log(b + " " + arr[1]);

let [first, ...rest] = [1, 2, 3, 4];
console.log(first);
console.log(rest);
console.log('The  first element of the remaining array is : ' + rest[0]);

// Object destructuring

let obj2 = {
    a: 'hello',
    b: true,
    c: 190
}
let { a: newName1, b: newName2 } = obj2
console.log(newName1);
console.log(newName2);

/**
 * Spread
* First, it only includes an object's own, enumerable properties. 
* Basically, that means you lose methods when you spread instances of an object.
* Second, the Typescript compiler doesn’t allow spreads of type parameters from generic 
* functions. That feature is expected in future versions of the language.
*/

let first1 = [1, 2];
let second = [3, 4];
let bothPlus = [0, ...first1, ...second, 5];
console.log(bothPlus);






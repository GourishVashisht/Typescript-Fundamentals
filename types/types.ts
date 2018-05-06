// string
let myName: string;
myName = 'Hello World !'
console.log(myName);

// string using backquote(`) character
let rollNo: number = 10;
let str: string;
str = `Hello i am gourish and my roll no is ${rollNo}`       // These are called Embedded Expression.
console.log(str);

// decimal no.
let num: number;
num = 10
console.log(num);

// binary no.
num = 0b0011
console.log(num);

// Hexadecimal no.
num = 0x1f
console.log(num);

// Octal no.
num = 0o23
console.log(num);

// boolean
let bool: boolean;
bool = true
console.log(bool);

// String array
let arr1: string[] = [];
arr1.push('Nitin')
arr1.push('Gourish')
arr1.push('Chetan')
console.log(arr1);

// number array
let arr2: number[];

// Heere array are of generic type and know the array has become homogenous
let arr3: Array<string>;

// object
let obj: object;
obj = {
    a: 'hello',
    b: 10,
    c: true
}
console.log(obj);


// array of objects
let objArray: object[] = [];
let o1: object = {
    a: 'hello',
    b: 90
}
let o2: object = {
    a: 'world',
    b: 20
}
objArray.push(o1)
objArray.push(o2)
console.log(objArray);

// x does not has any type so kuch bhi assign kardo
let X: any;

// like we have an infinite loop jo kuch bhi return nahi karega to we can use type; never which 
// specifies nothing
let y: never;

let z: undefined;

// tuple : here every element has to be like this
let arr4: [string, number, boolean];
arr4 = ["gourish", 10, true]
console.log(arr4);
console.log('First element of tuple is : ' + arr4[0]);
// If we try to use some other index then uski value has to be one of those specified in the tuple,
// otherwise it will give ERROR

// enum
enum color {
    red = "red",
    green = "green",
    yellow = "yellow"
}
console.log(color);
console.log(color.green);
console.log(color["green"]);

// void
let unusable: void;
unusable = undefined












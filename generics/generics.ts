// generic fuctions

function func2<T>(num: T): T {
    console.log("Hello world")
    return num
}
func2<string>("gourish")
func2<number>(10)

// generic classes
class GenericNumber<T> {
    value: T;
    add: (x: T, y: T) => T = function (x: T, y: T): T {
        return x
    };
    constructor(value: T) {
        this.value = value
    }
}

let myGenericNumber = new GenericNumber<number>(10);
myGenericNumber.add = function (x, y) { return x + y; };
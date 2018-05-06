let car: {
    model: number,
    seats: number,
    year?: number
}
car = {
    model: 2014,
    seats: 2,
    year: 200
}

function myCar(car: { name: string, type: string }): boolean {
    return true;
}
let obj1 = {
    name: "Maruti",
    type: "ABC",
    color: "Blue"
}
myCar(obj1)

let pizza1: { make: string, model: string }
pizza1 = {
    make: "fresh",
    model: "cheese",
    color: "green"
} as { make: string, model: string }
console.log(pizza1);

// Index parameter can also be used in it's place and this will aloow us to add more propoperties 
// to our existing object
let pizza2: {
    make: string, model: string,
    [prop: string]: any
}
pizza2 = {
    make: "stale",
    model: "onion",
    price: 250,
    tax: 123
}
console.log(pizza2);










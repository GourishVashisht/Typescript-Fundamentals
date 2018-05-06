// function
function sayHello(name: string): string {
    return 'Hello ' + name
}
console.log(sayHello('Gourish'))

// function expression
let f: (count: string) => string = function (name: string): string {
    return 'hello ' + name
}
console.log(f('Rajesh'))

// functions with optional parameters
function fun1(firstName: string, lastName?: string) {
    if (lastName)
        return 'Hello ' + firstName + " " + lastName
    else return 'Hello ' + firstName
}
console.log(fun1('Gourish'));
console.log(fun1('Gourish', 'Vashisht'));


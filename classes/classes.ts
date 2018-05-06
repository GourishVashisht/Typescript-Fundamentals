class Person {
    name: string
    constructor(name: string) {
        this.name = name
    }
}

let person1 = new Person('Gourish')
console.log(person1);

class shoppingCart {
    items: string[];
    constructor() {
        this.items = []
    }
    buy(item: string) {
        this.items.push(item);
    }
}

let mobile = new shoppingCart();
mobile.buy('Mobile Phone');
console.log("forst instance : " + mobile.items);

let tv = new shoppingCart();
console.log("second instance : " + tv.items);

function todoList() {
    let x: string
}
todoList.prototype = {
    items: [] = []
}

let todo1 = new todoList()
todo1.items.push('homework')
console.log("first obj : " + todo1.items)

let todo2 = new todoList();
console.log("second obj : " + todo2.items)
console.log(todoList.prototype.items)
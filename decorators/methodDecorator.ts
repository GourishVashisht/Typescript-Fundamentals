function writable(value: boolean) {
    return function (target, name, descriptor) {
        descriptor.writable = value
    }
}

class fruits {
    name: string
    price: number = 0
    constructor(name: string) {
        this.name = name
    }
    @writable(false)
    buy() {
        this.price = 30
    }
}

let fruit = new fruits('apple');
fruit.buy = function () {
    fruit.price = 50
}

fruit.buy()
console.log(fruit.price);

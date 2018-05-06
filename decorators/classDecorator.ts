function modifyOrnaments(constructor) {
    console.log(constructor);
    return class extends constructor {
        ornaments = 'blue'
    }
}

@modifyOrnaments
class christmasTree {
    ornaments: string
    constructor() {
        this.ornaments = 'red'
    }
}

let tree = new christmasTree();
console.log(tree);


/** Their are mainly 3 access specifiers in Typescript
*   1. public
*   2. private 
*   3. protected
*/

// by default everything in typescript is Public
class Person1 {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }
    greet() {
        console.log("Hello " + this.name);

    }
}
let p1 = new Person1('Gourish')
// p1.name  ERROR : name is private
p1.greet()

// readonly
class ab {
    readonly name: string
    constructor(name: string) {
        this.name = name
    }
}
let a1 = new ab('gourish')
// a1.name = ''  ERROR : readonly property

// Getter and Seeters
class Employee {
    private _fullName: string = "";

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        this._fullName = newName;
    }
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}

// We can also have static instance variables which can be accessed thorugh appending class Name
// ahead var name

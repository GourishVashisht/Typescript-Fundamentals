// Here compiler only checks for at least one argument and does not gives ERROR
function printLabel1(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}
let myObj1 = { size: 10, label: "Size 10 Object" };
printLabel1(myObj1);

// first Interface
interface LabelledValue {
    label: string;
}
function printLabel2(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}
let myObj2 = { size: 10, label: "Size 10 Object" };
printLabel2(myObj2);

// More on interfaces
interface pasta {
    sauce: string
    shape: string
}
interface quality {
    taste: string
    price: number
}
let redPasta: pasta;
let whitePasta: pasta;

function typePasta(): quality {
    return { taste: "great", price: 400 };
}
whitePasta = {
    sauce: "red",
    shape: "circular"
}
console.log(typePasta());

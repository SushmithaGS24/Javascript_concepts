

function greet (years) {
    console.log(`my name is ${this.name}, age is ${this.age}, having experience ${years}`);
}

const person1 = {
    name: 'sush',
    age: 25
}
const person2 = {
    name: 'sushmitha',
    age: 30
}

greet.apply(person1, [25]);
greet.apply(person2, [30]);








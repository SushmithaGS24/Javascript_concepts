

function greet ( years ){
    console.log(`My name is ${this.name}, age is ${this.age} , experiance is ${years} years.`);

}

const person1 = {
    name: 'sushmitha',
    age: 25
};
const person2 = {
    name: 'sushmitha1',
    age: 26
};

const person1Func = greet.bind(person1, 25);
const person2Func = greet.bind(person2, 25);

person1Func();
person2Func();








/* Example 1 : Accepting Function as arguments */
const numbers = [1,2,3,4];
const double = numbers.map((num) => {
    return num * 2;
});

console.log(double());

/* Example 2: Returning Function  */


function createMultiplier(num) {
    return function inner ( num1) {
        return num1 * num;
    }
}

const multiplier = createMultiplier(5);
console.log(multiplier(8));


/* Example 3 Composit Function */
function add(x) {
    return function(y) {
        return x + y; // Inner function uses the outer variable 'x'
    };
}

const addFive = add(5); // Creates a function that adds 5 to its argument
console.log(addFive(10)); // Output: 15


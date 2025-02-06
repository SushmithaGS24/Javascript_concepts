

/* Example 1 */

function count() {
    let count = 0;

    return function (){
        count = count + 1;
        console.log(count);
    }
}

const count1 = count();
count1();
count1();
count1();

/* Example 2 - Used as Callback */

function greet(name){
    setTimeout(() => {
        console.log(`Hi , I am ${name} `);
    }, 1000);
}

greet("Sushmitha");
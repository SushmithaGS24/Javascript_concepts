


Array.prototype.myMap = function (callback) {


    let result = [];

    for(let i=0;i<this.length;i++){
        if(this.hasOwnProperty(i)){
            result.push(callback(this[i], i, this));
        }
    }

    return result;
}

const numbers = [10,20,6];

const modifiedNumbers = numbers.myMap(num => num +1);

console.log(modifiedNumbers);
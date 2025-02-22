

Array.prototype.myFilter = function (callback) {
    let result =[];

    for(let i =0; i<=this.length; i++) {

        if(this.hasOwnProperty(i)) {
            if(callback(this[i], i, this)){
                result.push(this[i]);
            }
        }
    }
    return result;
}

const num = [2,4,6,9];

const even = num.myFilter(n => n % 2 === 0);
console.log(even);


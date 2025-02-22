

Array.prototype.myReduce = function (callback, initialValue) {


    if(!this.length && initialValue === undefined) {
        throw new TypeError("Emmpty array received");
    }
  

    let accumulator =  initialValue !== undefined ? initialValue : this[0]; // NOSONAR
    const startIndex = initialValue !== undefined ? 0 : 1; //NOSONAR

    for( let i=startIndex; i<this.length; i++){
        if(this.hasOwnProperty(i)){
            accumulator = callback(accumulator, this[i], i, this);
        }
    }

    return accumulator;
}

  const num = [2,4,6,8];

  const sum1 = num.myReduce((acc, num) => acc + num, 2);
  console.log(sum1);

  


    /* Handle Edge Case
    If the array is empty and initialValue is missing, throw an error.
    Set Initial Value
    If initialValue is provided, use it.
    Otherwise, use the first array element as accumulator.
    Loop Through the Array
    If initialValue was missing, start from index 1 instead of 0.
    Apply callback(accumulator, currentValue, index, array).
    Return Final Accumulator Value
    After iterating through all elements, return the reduced result.
    🔥 Example Usage
    js
    Copy
    Edit */
  
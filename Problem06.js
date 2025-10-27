/* Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:

arr[i] - number from the arr
i - index of arr[i]
filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

Please solve it without the built-in Array.filter method. */


let filter = function filter(arr, fn){
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)){
            res.push(arr[i]);
        }        
    }
    return res;
}

// Example 1
console.log(filter([0, 10, 20, 30], n => n > 10)); 
// Output: [20, 30]

// Example 2
console.log(filter([1, 2, 3], (n, i) => i === 0)); 
// Output: [1]

// Example 3
console.log(filter([-2, -1, 0, 1, 2], n => n + 1)); 
// Output: [-2, 0, 1, 2]



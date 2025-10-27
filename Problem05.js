/*Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.*/

let map = function map(arr, fn){
    const res = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
        res[i] = fn(arr[i], i);
    }
    return res;
}


function plusone(n) { return n + 1; }
console.log(map([1,2,3], plusone)); // -> [2, 3, 4]
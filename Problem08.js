/* Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

The function composition of an empty list of functions is the identity function f(x) = x.

You may assume each function in the array accepts one integer as input and returns one integer as output. */


function compose(functions) {
  return function(x) {
    for (let i = functions.length - 1; i >= 0; i--) {
      x = functions[i](x);
    }
    return x;
  };
}


// Example 1
let functions = [x => x + 1, x => x * x, x => 2 * x];
let fn = compose(functions);
console.log(fn(4)); // Expected output: 65

// Example 2
functions = [x => 10 * x, x => 10 * x, x => 10 * x];
fn = compose(functions);
console.log(fn(1)); // Expected output: 1000

// Example 3
functions = [];
fn = compose(functions);
console.log(fn(42)); // Expected output: 42

// Custom Test 1
functions = [x => x - 1, x => x - 2, x => x - 3];
fn = compose(functions);
console.log(fn(10)); // Expected output: 4

// Custom Test 2
functions = [x => x + 5, x => x * 2, x => x - 3];
fn = compose(functions);
console.log(fn(4)); // Expected output: 7

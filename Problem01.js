// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

function createHelloWorld(){
    return function(...args){
        return "Hello World"
    }
}

const f = createHelloWorld();
console.log(f()); // "Hello World"
console.log(f({}, null, 42)); // "Hello World"




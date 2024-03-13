// Problem Statement
// Let’s say you have a function that needs to return the first element of an array. Array can be of type either string or integer.
// How would you solve this problem?
// Solution
function getFirstElement(arr: (string | number)[]) {
    return arr[0];
}

const el = getFirstElement([1, 2, 3]);

// above code has two big problems.
// User can send different types of values in inputs, without any type errors

function getFirstElement1(arr: (string | number)[]) {
    return arr[0];
}

const el1 = getFirstElement([1, 2, '3']);

// Typescript isn’t able to infer the right type of the return type
function getFirstElement2(arr: (string | number)[]) {
    return arr[0];
}

const el2 = getFirstElement(["sahilThadani", "ramanSingh"]);
// console.log(el2.toLowerCase()) givib error property dont exits on type string|number 


// Now Generics came to pitchure --> Generics enable you to create components that work with any data type while still providing compile-time type safety.

function GetFirstElement <T> (arr:T[]){
    return arr[0]
}
const element = GetFirstElement<string>(["shail","thadani"])
const element1 = GetFirstElement<number>([1,9])
console.log(element.toLowerCase())
const name = "Subhasis";
const age = 24;

const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting);

const multiLineString = `This is a string
that spans multiple
lines
AGE: ${age}.`;

console.log(multiLineString);

///


const colors = ["red", "green", "blue"];
const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor); // Output: red
console.log(secondColor); // Output: green
console.log(thirdColor); // Output: blue

///

const numbers = [1, 2, 3, 4, 5];

// Skip the first two elements
const [, , third, fourth, fifth] = numbers;

console.log(third);  // Output: 3
console.log(fourth); // Output: 4
console.log(fifth);  // Output: 5

///

const fruits = ["apple"];

// Assign default values to variables
const [firstFruit, secondFruit = "banana"] = fruits;

console.log(firstFruit);  // Output: apple
console.log(secondFruit); // Output: banana

//
let a = 1;
let b = 2;

// Swap variables using destructuring
[a, b] = [b, a];

console.log(a); // Output: 2
console.log(b); // Output: 1

///

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];

console.log(arr2); // Output: [1, 2, 3, 4, 5, 6]

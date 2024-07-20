//

function evenOrOdd(val) {
    if(val%2==0){
        console.log("Even No");
    }else{
        console.log("Odd No");
    }
}

evenOrOdd(95);

//

function square(val) {
    console.log(val*val);
}

square(5);

//

function concateString(str1,str2){
    console.log(str1+str2);
}

concateString('abc', 'efg');

//

let sum= (a,b) => {
    return a+b;
};

console.log(sum(5,10));

/*
A higher-order function in JavaScript is a function that does at least one of the following:

-> Takes one or more functions as arguments.
-> Returns a function as its result.
*/

function createMultiplier(multiplier) {
    return function(num) {
        return num * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
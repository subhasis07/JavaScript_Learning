
const myArr=[0,1,2,38];
const myArr2= new Array(1,2,3,4);

// myArr.push(7); //add at end
// console.log(myArr); 

// myArr.pop(); //remove from end
// console.log(myArr);  

// myArr.unshift(9);  //add at beginning
// console.log(myArr); 

// myArr.shift();  //remove from beginning
// console.log(myArr); 

// const newArr =myArr.join();  //returns array as a string
// console.log(myArr);
// console.log(newArr);

// console.log(typeof myArr);
// console.log(typeof newArr);

//splice, slice

const newArr= [1,2,3,4,5,6,7];

console.log("A: ", newArr);

const myn1=newArr.slice(1,3); // slice(starting point(include) , ending point (exclude))
console.log(myn1);
console.log("B: ", newArr); //main arr unchanged

const myn2=newArr.splice(1,3); // splice(starting point, count of no cuts)
console.log(myn2);
console.log("C: ", newArr); // main arr changed
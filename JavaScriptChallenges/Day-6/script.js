///
let arr= [4,5, 8,50];

console.log(arr.push(10)); //Adds one or more elements to the end of an array, and returns the new length of the array.
console.log("after pushing 10:" + arr); 

console.log(arr.pop()); //Removes the last element from an array and returns that element.
console.log(" after popping:" +arr); 

console.log(arr.shift()); //Removes the first element from an array and returns that element.
console.log("after shifting:" + arr);

console.log(arr.unshift(11)); //Adds one or more elements to the front of an array, and returns the new length of the array.
console.log("after unshiftng:" + arr);


/// 
let myArr1= [4,5, 8,50];
//map() creates a new array from calling a function for every array element.
const newArr= myArr1.map((val)=>{
    return val*2;
});

console.log(newArr);

// filter() method creates a new array filled with elements that pass a test provided by a function.

const newArr2= myArr1.filter((val)=>{
    return val%2==0;
});

console.log(newArr2);

const res= myArr1.reduce( (acc,curr) => {
    return acc+curr
},0)
console.log(res);


///


let myArr2=[1,2,3,4,5,6,7,8];

for (let idx = 0; idx < myArr2.length; idx++) {
    console.log(myArr2[idx]);    
}

myArr2.forEach((elem) => {
    console.log(elem*2);  
});


///

let multiArr=[
    [1,2,3,4],
    [5,6,7,8]
];

console.log("row: " + multiArr.length);
console.log("column: " + multiArr[0].length);
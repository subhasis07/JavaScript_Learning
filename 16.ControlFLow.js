// if ,if-else

const temp=44;

//case-1
// if(temp>40){
//     console.log("Too Hot");
// }

// // case-2
// const temp2=34;
// if(temp2>40){
//     console.log("temp is 40+");
// }else{
//     console.log("temp is OK");
// }

// case-3

// const isUserLoggedIn=true;
// const isUserPurchased=false;

// if(isUserLoggedIn && !isUserPurchased){
//     console.log("only view Modules");
// }else if(!isUserLoggedIn){
//     console.log("Need to Login");
// }else if( isUserLoggedIn && isUserPurchased){
//     console.log("Course Accessed");
// }


//Switch

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month= 3;

// switch (month) {
//     case 1:
//         console.log("Jan");
//         break;
//     case 2:
//         console.log("Feb");
//         break;
//     case 3:
//         console.log("Mar");
//         break;
//     case 4:
//         console.log("Apr"); //if break not added then rest whole code executed w/o default case
//         break;

//     default:
//         console.log("Default Case");
//         break;
// }


//Truty -falsy values

/**
 * falsy values:
 * false, 0 , -0, undefined,  NaN, "", BigInt 0n, null
 * 
 * Truthy:
 * rest all
 * "0", 'false', " ", [], {}, function(){}
 */

// const emptyArr= [];
// if(emptyArr.length===0){
//     console.log("Array is Empty");
// }

// const emptyObj={};
// if(Object.keys(emptyObj).length===0){
//     console.log("Object is Empty");
// }


//Terniary

const res=50;

(res>70)? console.log("pass"): console.log("fail");

// Nullish Coalescing Operator(??): null undefined

// val1= 10 ?? 20;
val1= null?? 10;
// val1=undefined??15;
// val1= null??10 ?? 20;
console.log(val1);
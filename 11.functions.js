function sayMyName() {
    console.log("S");
    console.log("U");
    console.log("B");
    console.log("H");
    console.log("R");
    console.log("O");
}

// sayMyName(); //fro execute
// sayMyName; //for reference

// function sum(number1, number2) {
//     console.log(number1+number2);
// }

function sum(number1, number2) {
    return (number1+number2);
}
const res= sum(111,23);  

// console.log(res);

function loginMSG(userName) {
    if (userName === undefined) {
        return ("Please enter a valid username");
    } else {
        return (`${userName} joined the lobby` );
    }
    
}

// console.log(loginMSG("ABC"));

function calulateParam(...num1) {
    return num1;
}

function calulateParamConst(val1, val2, ...num1) {
    return num1;
} 

// console.log(calulateParam(1100,200,300,500,600,99));
// console.log(calulateParamConst(1100,200,300,500,600,99));


const user1={
    name:"Subhasis",
    rollNo:7
}

function handleObj(anyObject) {
    console.log(`user name is ${anyObject.name} & roll No is ${anyObject.rollNo}`);
}

// handleObj(user1);

// handleObj({
//     name: "sam",
//     rollNo: 8
// })


const myArr=[212,22,54,11,8,800];
function playWithArrayFun(currArr) {
    return currArr[1];
}

console.log(playWithArrayFun(myArr));
console.log(playWithArrayFun([200,500,600]));
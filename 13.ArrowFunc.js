const user ={
    username: "Spal",
    roll: 07,

    welcomeMSGL: function() {
        console.log(`${this.username},  Welcome to the JS`)
        console.log(this);  //{ username: 'Spal', roll: 7, welcomeMSGL: [Function: welcomeMSGL] }
    }
}

// user.welcomeMSGL();
// user.username="AD";
// user.welcomeMSGL();

// console.log(this); //{}


// function chai() {
//     console.log(this);
// }

// chai();

// function chai() {
//     let name="ss"
//     console.log(this.name)
// }

// chai();  -->undefined

// const chai= function() {
//     let name="ss"
//     console.log(this.name)
// }

// const chai= () => {  //arrow func
//     let name="ss"
//     console.log(this.name)
// }
// chai();

//explicit return
// const addTWo = (num1, num2) =>{
//     return num1+num2;
// }

//implicit return
// const addTWo = (num1, num2) => (num1+num2);  //can be w/o paranthesis
const addTWo = (num1, num2) => ({userName: "SP"});  //return obj -- under () paranthesis
console.log(addTWo(4,8));



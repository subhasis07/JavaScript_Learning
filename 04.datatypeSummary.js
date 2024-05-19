// Primitive

//7 types: String, Number, boolean, null, undefined, Symbol, BigInt


//Reference (Non-primitive)

//Array, Objects, Functions


//---


//stack (primitive) ;; Heap (Non-primitive)
//stack e copy thakbe
//heap e refernece thakbe


let myName ="SP";
let anotherName=myName;
anotherName="AD";

console.log(myName);
console.log(anotherName);


let user1= {
    email:"sp@gmail.com",
    phone:1111111
}

let user2= user1;

user2.email="AD@gmail.com";

console.log(user1.email);;
console.log(user2.email);
let mySym1=Symbol("key1");
let mySym2=Symbol("key1");


const objUser ={
    name:"spal",
    "fullName":"Subhasis pal",
    phneNo:11111111,
    [mySym1]:"usedKey",
    mySym2:"used",
    email:"subhasis@google.com",
    place: "Berhampore",
    isAvailable:["Monday","Wednesday"]
}

// console.log(objUser.phneNo);
// console.log(objUser["fullName"]);
// console.log(objUser[mySym1]);
// console.log(typeof objUser[mySym1]);
// console.log(objUser.mySym2);
// console.log(typeof objUser.mySym2);

// console.log(objUser);

// objUser.email="sp@faang.com";
// Object.freeze(objUser);
// objUser.email="sp@tcs.com";
// console.log(objUser);

objUser.greet= function(){
    console.log("Hello!!!!!!!");
}
objUser.greetNew= function(){
    console.log(`Hello!!!!!!! ${this.name}`);
}

// console.log(objUser.greet);
console.log(objUser.greet());
console.log(objUser.greetNew());





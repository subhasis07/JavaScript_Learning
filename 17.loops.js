//for

// for (let i = 1; i < 10; i++) {
//     console.log(`Table for ${i}`);
//     for (let j = 1; j < 10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }

// for (let i = 0; i < 20; i++) {
//     if(i==7){
//         console.log(`Found 7 at ${i}`);
//         break;
//     }
//     console.log(`${i} not equals to 7`);
// }
// let cnt=0;
// for (let i = 0; i < 20; i++) {
//     if(i==7){
//         cnt++;
//         console.log("7 found");
//         continue;
//     }
//     console.log(`${i} not equals to 7`);
    
// }
// console.log(`Found 7 for ${cnt} times`);


//While

const arr= [ 1, 2, 3,45, 5, 56,55, 6,6,432.2,4];
let idx=0;

// while(idx<arr.length){
//     console.log(arr[idx]);
//     idx+=3;
// }

let i=11;
// do{
//     console.log(i);
// }while(i<10);

//For-of

const greet= "Hello";
for (const val of greet) {
    // console.log(`char= ${val}`);
}

const map = new Map;

map.set(1, "A");
map.set(2, "B");
map.set(3, "C");

// console.log(map);

for (const [key,value] of map) {
    // console.log(key+ " :-> " + value);
}
// for (const key in map) {
//     // console.log(key); //not iterable
// }

const myObj={
    game1: "NFS",
    game2: "BGMI"
}

// for (const [key,value] of myObj) {
//     console.log(key+ " :-> " + value); //not iterable like this
// }

for (const key in myObj) {
    // console.log(key);
    // console.log(myObj[key]);
}

const myArr=["RB", "Java", "JS"];

for (const key in myArr) {
    // console.log(key);
    // console.log(myArr[key]);
} 


//// for-each

const coding=["JS", "Java" , "CPP", "Ruby"];

coding.forEach(function(item){
    // console.log(item)
})

coding.forEach((Val)=>{
    // console.log(Val);
})

coding.forEach(print);
function print(item){
    // console.log(item);
}

coding.forEach((val, index,arr)=>{  //ei 3 te value niye asbe function callback e
    // console.log(val, index, arr);
})

const myCoding=[
    {
        Lang: "Java",
        Extension: ".java"
    },
    {
        Lang: "JavaScript",
        Extension: ".js"
    },
    {
        Lang: "CPP",
        Extension: ".cpp"
    }
]

myCoding.forEach((item)=>{
    console.log(item.Lang);
})
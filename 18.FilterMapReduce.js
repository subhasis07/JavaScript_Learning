const coding=["JS", "Java" , "CPP", "Ruby"];

// const val=coding.forEach( (item) => {
//     return item; //forEach did not return anything
// })

// console.log(val);

const values=[1, 2 ,3 , 4 , 8 , 8, 99];

const res1= values.filter( (item) => item>=8);

const res2= values.filter( (item) => {
    return item>=8
});
  
const res3= values.map( (item) => item+20);

const res4= values.map( ((item) => item+10 ))
                  .map( (item) => item *10)
                  .filter( (item)=> item>=100);
    
// console.log(res4);


let res= [1,2,3];

// const val= res.reduce( function(accumulator, currVal) {
//     console.log(`Accumulator val= ${accumulator} , CurrVal =${currVal}`);
//     return accumulator+currVal;
// }, 5); //starting accumulatpr val is given here

const val = res.reduce ( (acc,curr) => acc+curr , 5 ) 

// console.log(val);


let shoppingCart=[
    {
        course: "JS",
        price: 999
    },
    {
        course: "Java",
        price: 1999
    },
    {
        course: "Developmet",
        price: 3999
    },
    {
        course: "iOS+And",
        price: 12999
    },
]


const totalVal= shoppingCart.reduce ( (acc,item) => acc+item.price, 0)
console.log(totalVal);
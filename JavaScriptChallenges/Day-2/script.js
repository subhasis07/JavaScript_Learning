//
function addition(a,b) {
    console.log(a+b);
}
function substraction(a,b) {
    console.log(a-b);
}
function mult(a,b) {
    console.log(a*b);
}
function divi(a,b) {
    console.log(a/b);
}

addition(5,9);
substraction(10,1);
mult(5,98);
divi(10,3);

//


function comparison(a, b) {
    if(a>b){
        console.log(`${a} is biger between ${a} & ${b}`);
    }else if(a<b){
        console.log(`${b} is biger between ${a} & ${b}`);
    }else{
        console.log(`Both values are same : ${a}`);
    }
}

comparison(91,91);

//

function posOrneg(a){
    console.log(a>=0?"positive":"negative");
}

posOrneg(90);
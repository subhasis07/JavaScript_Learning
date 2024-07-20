//
for(let i=1;i<=10;i++){
    console.log(i);
}
let k=1;
while(k<11){
    console.log(k);
    k++;
}

//
for(let j=1;j<=10;j++){
    console.log(`5*${j} = ${5*j}`);
}

//
let sum=0, st=1;
while(st<=10){
    sum+=st;
    st++;
}
console.log(sum);

//

let ip=prompt("Enter an Number: ");
let fact=1;
do {
  fact*=ip;
  ip--;
} while (ip>0);

console.log(fact);
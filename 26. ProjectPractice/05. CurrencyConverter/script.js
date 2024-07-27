const BASE_URL = "https://raw.githubusercontent.com/WoXy-Sensei/currency-api/main/api/";


const dropdowns= document.querySelectorAll(".dropdown select");
const btn=document.getElementById("converter");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const finalAmountInput = document.getElementById("output-value");


for(let select of dropdowns){
    for(let currCode in countryList){
        let newOption= document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;

        if(select.name=="from" && currCode==="INR"){
            newOption.selected="selected";
        } 
        if(select.name=="to" && currCode==="USD"){
            newOption.selected="selected";
        }

        select.append(newOption);
    } 

    select.addEventListener("click",(event)=>{
        updateFlag(event.target);
    })

}

const updateFlag=(element)=>{
   let currCode=element.value;
   let currContryCode=countryList[currCode];
   let newSrc=`https://flagsapi.com/${currContryCode}/flat/64.png`
   let img=element.parentElement.querySelector("img");
   img.src=newSrc;
}


btn.addEventListener("click",async (event)=>{
    event.preventDefault();
    let amount=document.getElementById("input-value");
    let amountVal=amount.value;
    if (isNaN(amountVal)) {
        alert('Please enter a valid number');
        return;
    }
    if(amountVal==="" || amountVal<1){
        amount=1;
        amountVal="1";
    }
    try{
        const URL = `${BASE_URL}/${toCurr.value}_${fromCurr.value}.json`;
        let response = await fetch(URL);
        let data=await response.json();
        // console.log(data);
        let rate=data.rate;
        // console.log(rate);

        let finalAmount=amountVal*rate;

        finalAmountInput.value=finalAmount.toFixed(2);
    }catch(err){
        alert("Not Supported!")
    }
    
})

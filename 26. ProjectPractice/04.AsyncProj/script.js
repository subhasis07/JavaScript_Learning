const URL = "https://cat-fact.herokuapp.com/facts"

const fact=document.getElementById("fact");

const btn = document.getElementById("btn");

//by async-await

const getFacts = async() =>{
    let response = await fetch(URL);
    console.log(response.status);
    let data= await response.json();
    fact.innerText=data[1].text;
    // console.log(data[1].text);
}


// by promise chain

// function getFacts() {
//     fetch(URL)
//     .then((response)=>{
//         return response.json();
//     })
//     .then((data)=>{
//         console.log(data);
//         fact.innerText=data[1].text;
//     })
// }

btn.addEventListener("click", getFacts);

/**
 * 
 * Ajax : async JS & XML
 * 
 * JSON: js Obj notation
 * 
 * json() method: return a second promise that resolve with the result of parsing the response body text as json
 * 
 * i/p is json ; o/p is JS obj 
 */
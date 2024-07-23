// promise

let myPromise = new Promise((resolve,reject) => {
    let success=true;
    setTimeout(() => {
        if(success){
            resolve("Ops success");
        }else{
            reject("Ops failed");
        }
    }, 2000);
    
})

myPromise
.then((msg)=>{
    console.log(msg);
})
.catch((err)=>{
    console.error(err);
})
.finally(()=>{
    console.log("Promise settled");
})

// promise chaining

let myPromise2= new Promise((resolve,reject) =>{
    let val=51;
    if(val<50){
        reject("cannot proceed");
    }else{
        resolve(val);
    }
})

myPromise2
.then((res)=>{
    console.log(res);
    return res*2
})
.then((res)=>{
    console.log(res);
    return res*3;
})
.then((res)=>{
    console.log(res);
})
.catch((error)=>{
    console.error(error);
})

// async-await

function validityAfter5Sec() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("5sec passed!")
        }, 5000);
    })
}

async function testASyncFunc(){
    console.log("waiting to resolve");
    let msg= await validityAfter5Sec();
    console.log(msg);
}


async function testASyncFunc(){
    try{
        console.log("waiting to resolve");
        let msg= await validityAfter5Sec();
        console.log(msg);
    }catch(error){
        console.error(error);
    }
    
}
testASyncFunc();

// API fetch

async function fetchData(){
    try{
        let response=await fetch('<URL>');
        if(!response.ok){
            throw new Error('N/W response not OK!')
        }
        let data = await response.json();
        console.log(data);
    }catch(error){
        console.error('issue with the fetch ops', error);
    }
}

fetchData();




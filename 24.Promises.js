// const promiseOne = new Promise(function (resolve,reject) {
//     setTimeout(() => {
//         console.log("Async Work-1 Done");
//         resolve();
//     }, 1000);
// })

// promiseOne.then(function () {
//     console.log("promise-1 Done");
// })

// //

// new Promise(function (resolve,reject) {
//     setTimeout(() => {
//         console.log("Async Work-2 Done");
//         resolve();
//     }, 2000);
// }).then(function () {
//     console.log("promise-2 done")
// })


// const promiseThree= new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve({
//             user: "Subho",
//             mail:"palsubhasis100@gmail.com"
//         })
//     }, 1000);
// })


// promiseThree.then(function(details){
//     console.log(details);
// })


// const promiseFour= new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         let error=true;
//         if(!error){
//             resolve({
//                 userName: "Subho-2",
//                 mail:"subhrocr07@gmail.com"
//             })
//         }else{
//             reject(`Error!Someting went wrong`);
//         }
//     }, 1000);
// })

// promiseFour
// .then(function(user){
//     console.log(user);
//     return user.userName;
// })
// .then((username)=>{
//     console.log(username);
// })
// .catch(function (error) {
//     console.log(error);
// })
// .finally(() => {
//     console.log("The promise is either resolved or rejected")
// })



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
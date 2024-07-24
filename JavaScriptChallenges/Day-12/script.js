////

const res= new Promise((resolve,reject)=>{
    let res= true;
    if(res){
        console.log("good to go");
        resolve("ops success")
    }else{
        console.error("Having some issue");
        reject("ops failed")
    }
})

res
.then((msg)=>{
    console.log(msg);
})
.catch((err)=>{
    console.error(err);
})
.finally(()=>{
    console.log("settled");
})

////
class CustomError extends Error {
    constructor(message, errorCode) {
      super(message);
      this.name = this.constructor.name;
      this.errorCode = errorCode;
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  const res2 = new Promise((resolve, reject) => {
      let condition = false; // Simulate a condition
  
      if (condition) {
          resolve("Operation successful");
      } else {
          reject(new CustomError("Having some issue", 1001));
      }
  });
  
  res2
    .then((msg) => {
      console.log(msg);
    })
    .catch((err) => {
      if (err instanceof CustomError) {
        console.error(`Custom Error - Code: ${err.errorCode}, Message: ${err.message}`);
      } else {
        console.error(err);
      }
    })
    .finally(() => {
      console.log("settled");
    });
  

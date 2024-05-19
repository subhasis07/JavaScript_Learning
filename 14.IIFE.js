//Immediately Invoked Function Expressions (IIFE)

(function chai() {  // named IIFE
    console.log(`DB ON`);
})();  //need to stop the execution by putting ;

( () => {
    console.log(`DB ON 2`);
})();

( (name) => {  //unnamed IIFE
    console.log(`DB ON 3 ${name}`);
})("SP");
// (defination) (excution)
// Globla scope ke pollution se may be problem ho sakta hai --so to remove that, ()()
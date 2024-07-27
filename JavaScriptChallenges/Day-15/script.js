function outerFunction() {
    let outerVar = "I'm from the outer scope!";
    return function innerFunction() {
      console.log(outerVar);
    };
}
  
const myFunction = outerFunction();
myFunction(); // Output: "I'm from the outer scope!"

///

function createCounter() {
    let counter = 0;
    return{
        increment: function () {
            counter++;
            console.log(`counter no: ${counter}`);
        },

        getValue: function(){
            return counter;
        }
    };  
}

function createCounter() {
    let counter = 0;
    return {
        increment: function() {
        counter++;
        console.log(`Counter: ${counter}`);
        },
        getValue: function() {
        return counter;
        }
    };  
}

const counter = createCounter();
counter.increment(); // Counter: 1
counter.increment(); // Counter: 2
console.log(counter.getValue()); // 2

///

function getUniqueID(){
    let ID=0;
    return function () {
        ID++;
        return ID;
    }
}

const generateID = new getUniqueID();
console.log(generateID());
console.log(generateID());
console.log(generateID());


///

function greet(name) {
    return function () {
        console.log(`Hello ${name}`);
    }
}

const user1= new greet("Subhro");
user1();

///

function createFuncArray(){
    var functions =[];
    for (var idx = 0; idx < 5; idx++) {
        functions.push((function(idx){
            return function(){
                console.log(idx);
            };
        })(idx));
        
    }
    return functions;
}
  

const functionArray = createFuncArray();
functionArray[0](); // 0
functionArray[1](); // 1
functionArray[2](); // 2
functionArray[3](); // 3
functionArray[4](); // 4


/////

const itemManager=(function () {
    let items=[];
    return{
        addItem: function (item) {
            items.push(item);
            console.log(`${item} added`);
        },
        removeItem: function (item) {
            const idx=items.indexOf(item);
            if(idx>-1){
                items.splice(idx,1)
            }else{
                console.log(`${item} not found`);
            }
        },
        listItems: function () {
            console.log(`Items available: `, items);
        }
    }
})();

itemManager.addItem('apple'); // apple added.
itemManager.addItem('banana'); // banana added.
itemManager.listItems(); // Items: [ 'apple', 'banana' ]
itemManager.removeItem('apple'); // apple removed.
itemManager.removeItem('apple'); // apple removed.
itemManager.listItems(); // Items: [ 'banana' ]


/////

function memoize(fn) {
    const cache = {};
    return function(...args) {
      const key = JSON.stringify(args);
      if (cache[key]) {
        return cache[key];
      }
      const result = fn(...args);
      cache[key] = result;
      return result;
    };
  }
  
  function add(a, b) {
    return a + b;
  }
  
  const memoizedAdd = memoize(add);
  console.log(memoizedAdd(1, 2)); // 3
  console.log(memoizedAdd(1, 2)); // 3 (from cache)
  console.log(memoizedAdd(2, 3)); // 5
  
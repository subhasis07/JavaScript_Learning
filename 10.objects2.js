// const cricUser = new Object();  --> Singleton Obj
const cricUser ={};

cricUser.id="111od";
cricUser.name="user";
cricUser.isLogged=false;

// console.log(cricUser);

// console.log(Object.keys(cricUser));
// console.log(Object.values(cricUser));
// console.log(Object.entries(cricUser));

// console.log(cricUser.hasOwnProperty('isLogged'));
// console.log(cricUser.hasOwnProperty('roll'));

const otherUer = {
    email: "user@gmail.com",
    fullname:{
        firName:"Subhasis",
        lastName:"Pal"
    }
}
// console.log(otherUer);
// console.log(otherUer.fullname.firName);

const obj1= {1:"a " , 2: "b"};
const obj2= {3:"a " , 4: "b"};
const obj3= {5:"a " , 6: "b"};

// const objSum = Object.assign({}, obj1, obj2 , obj3);

const objSum= {...obj1, ...obj2, ...obj3};
// console.log(objSum);

const users=[
    {
        id:1,
        email:"abc@gmail.com"
    },
    {
        id:1,
        email:"abc2@gmail.com"
    },
    {
        id:1,
        email:"abc3@gmail.com"
    }

]

// console.log(users[0].email);

// -- obj destructor
const course={
    name:"JavaScript basic to Adv",
    id: "JS7",
    instructor:"Hitesh sir"
}

// console.log(course.instructor);

//or

const{instructor: inst} =course;

console.log(inst);


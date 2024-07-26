
//
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    greet(){
        return `Hello, I am  ${this.name} & my ag is${this.age}`;
    }

    updateAge(newAge){
        this.age=newAge;
        console.log(`updated age: ${this.age}`);
    }

    static generalGreet(){
        return `Hello from Gen greet`;
    }
}

const person= new Person("SP",25);
console.log(person.greet());
person.updateAge(28);


////

class Student extends Person{

    static noOfStudent=0;

    constructor(name, age, studID){
        super(name,age);
        this.studID=studID;
        Student.noOfStudent+=1;
    }

    getStudID(){
        return this.studID;
    }

    greet(){
        return `Hi I am student; Name= ${this.name} & my ID: ${this.studID}`
    }
}

const st1= new Student("AD", 27, "ID007");
const st2= new Student("SP", 27, "ID7");
console.log(st1.getStudID());
console.log(st1.greet());
console.log(Student.generalGreet());
console.log((Student.noOfStudent));

////

class fullPerson{
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }

    set fullName(name){
        const[firstName , lastName]=name.split(' ');
        this.firstName=firstName;
        this.lastName=lastName;
    }
}

const per2 = new fullPerson("Subhasis","Pal");
console.log(per2.fullName);
per2.fullName="Ani Das";
console.log(per2.fullName);

////

class Account{
    #balance=0; //private field

    constructor(initialBal=0){
        this.#balance=initialBal;
    }

    deposit(amount){
        if(amount>0){
            this.#balance+=amount;
            console.log(`Deposited:₹${amount} ; FInal Balance: ₹${this.#balance}`);
        }else{
            console.log(`Amount must be positive`);
        }
    }


    withdraw(amount){
        if(amount>this.#balance){
            console.log(`Insufficient Balance`);
        }else if(amount<=0){
            console.log(`Withdraw amount must be greater than 0`);
        }else{
            this.#balance-=amount;
            console.log(`Withdrawn:₹${amount} ; FInal Balance: ₹${this.#balance}`);
        }
    }

    getBalance(){
        return this.#balance;
    }
}


const account = new Account(50); 
account.deposit(100); 
account.withdraw(30); 
account.withdraw(200); 
console.log(`Final balance: $${account.getBalance()}`); 

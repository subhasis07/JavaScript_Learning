//
const bookObj = {
    title: "Feluda Samagra",
    author:"Satyajit Roy",
    ratings: 4.5,
    
    details(){
        console.log(`${this.title} written by ${this.author}`); 
    },
    
    updateRatings(x){
        this.ratings=x;
    }
}

console.log(bookObj);
console.log(bookObj.title);
console.log(bookObj.ratings + "/5");

bookObj.details();
bookObj.updateRatings(4.9);
console.log(bookObj);


//
const allBooks=[
    {
        title: "Feluda Samagra",
        author:"Satyajit Roy",
        ratings: 4.8,
    },
    {
        title: "Byomkesh Samagra",
        author:"Saradindu Bandopadhyay",
        ratings: 4.8,

    },
    {
        title: "Sherlock Homes",
        author:"Sir Arthur Conan Doyle",
        ratings: 4.8,

    }
]


console.log(allBooks);



const booktitle=[];
allBooks.forEach((books) => {
    booktitle.push(books.title);
});

console.log(booktitle);


const bookTitle= allBooks.map((books)=>{
    return books.title;
})

console.log(bookTitle);


//single book
const firstBook=allBooks[0];

const keys=Object.keys(firstBook);
const values=Object.values(firstBook);

console.log("keys: ", keys);
console.log("values: ", values);



//all book
const allKeys=allBooks.map((book) =>{
    return Object.keys(book)
})
const allValues=allBooks.map(book => Object.values(book)
)


console.log("All keys: ", allKeys);
console.log("All values: ", allValues);



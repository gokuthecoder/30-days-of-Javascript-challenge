/* 
        ██████╗  █████╗ ██╗   ██╗    ███████╗        ██████╗ ██████╗      ██╗███████╗ ██████╗████████╗███████╗
        ██╔══██╗██╔══██╗╚██╗ ██╔╝    ╚════██║██╗    ██╔═══██╗██╔══██╗     ██║██╔════╝██╔════╝╚══██╔══╝██╔════╝
        ██║  ██║███████║ ╚████╔╝         ██╔╝╚═╝    ██║   ██║██████╔╝     ██║█████╗  ██║        ██║   ███████╗
        ██║  ██║██╔══██║  ╚██╔╝         ██╔╝ ██╗    ██║   ██║██╔══██╗██   ██║██╔══╝  ██║        ██║   ╚════██║
        ██████╔╝██║  ██║   ██║          ██║  ╚═╝    ╚██████╔╝██████╔╝╚█████╔╝███████╗╚██████╗   ██║   ███████║
        ╚═════╝ ╚═╝  ╚═╝   ╚═╝          ╚═╝          ╚═════╝ ╚═════╝  ╚════╝ ╚══════╝ ╚═════╝   ╚═╝   ╚══════╝
*/

/************************************************* Task 1 ***************************************************/
let book = {
    title: "Harry Potter",
    author: "JK Rowling",
    year: 1996
};

console.log(book)

/************************************************* Task 2 ***************************************************/
console.log(`title : ${book.title}\nauthor: ${book.author}\n`);

/************************************************* Task 3 ***************************************************/
let callFunc = book.myFunc = function (title, author) {
    let str = `${book.title} Book is Written by ${book.author}`
    return str;
};

console.log(callFunc());

/************************************************* Task 4 ***************************************************/
let CallyearUpdate = book.yearUpdate = (year) => book.year = year;
CallyearUpdate(2001);
console.log(book);

/************************************************* Task 5 ***************************************************/
const library = {
    name: "City Library",
    books: [
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            year: 1960
        },
        {
            title: "1984",
            author: "George Orwell",
            year: 1949
        },
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            year: 1925
        }
    ]
};

console.log(library);

/************************************************* Task 6 ***************************************************/
console.log(`Library Name : ${library.name}`);
library.books.forEach(function (value) {
    console.log(`\nBook title : ${value.title}`);
})

/************************************************* Task 7 ***************************************************/
library.books.forEach(function (value) {
    value.getDetails = function(){
        return `${this.title}(${this.year})`;
    };
});

library.books.forEach(function (book) {
    console.log(`${book.getDetails()}`);
});

/************************************************* Task 8 ***************************************************/
library.books.forEach(function (book) {
    console.log('Book Details :')
    for (const key in book) {
        if (book.hasOwnProperty(key)) {
            console.log(`${key}: ${book[key]}`);
        }
    }
    console.log(` `);
});

/************************************************* Task 9 ***************************************************/
library.books.forEach(function (book) {
    console.log('Books Details :')
    let keys = Object.keys(book);
    let value = Object.values(book);

    keys.forEach((key, index) => {
        console.log(key, value[index])
    });

    console.log(' ');
});
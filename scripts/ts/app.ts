/// <reference path="../../node_modules/@types/lodash/index.d.ts" />

import { Category } from 'enums';
import { Book, Logger, Author, Librarian, Magazine } from './interfaces';
import { UniversityLibrarian, ReferenceItem }  from './classes';
import { CalculateLateFee as CalcFee, MaxBooksAllowed, Purge } from './lib/utilityFunctions';
import Encyclopedia from './encyclopedia';
import Shelf from './shelf';
import * as _ from 'lodash';

function GetAllBooks() : Book[]{
    let books = [
        {id : 1, title : 'Ulysses', author: 'James Joyce', available:true, category:Category.Fiction},
        {id : 2, title : 'A Farewell to Arms', author: 'Ernest Hemingway', available:false, category:Category.Fiction},
        {id : 3, title : 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available:true, category:Category.Poetry},
        {id : 4, title : 'Moby Dick', author: 'Herman Melville', available:true, category:Category.Fiction}
    ]

    return books;
}

function LogFirstBookAvailable(books : Book[] = GetAllBooks()):void{

    let numberOfBooks : number = books.length;
    let firstAvailable: string = '';

    for(let currentBook of books){
       if (currentBook.available == true) {
            firstAvailable = currentBook.title;
       }
    }

    console.log('Number of Books : ' + numberOfBooks);
    console.log('First Available Book : ' + firstAvailable);
}

function GetBookTitlesByCategory(categoryFilter : Category = Category.Fiction) : string[]{
    console.log('Getting Books in category : ' + Category[categoryFilter]);

    const allBooks = GetAllBooks();
    let filteredBooks : string[] = [];

    for(let currentBook of allBooks){
        if (currentBook.category === categoryFilter)
            filteredBooks.push(currentBook.title);
    }

    return filteredBooks;
}

function LogBookTitles(titles : string[]) : void{
    for(let title of titles){
        console.log(title);
    }
}

function GetBookById(id : number) : any {
    const allBooks = GetAllBooks();
    return allBooks.filter((book) => book.id == id)[0];
}

function CreateCustomerID(name:string, id:number):string{
    return name + id;
}

function CreateCustomer(name : string, age? : number, city? : string){
    console.log('Name : ' + name);
    if (age)
        console.log('Age : ' + age);
    if (city)
        console.log('City : ' + city);
}

function CheckoutBooks(customer:string, ...bookIds : number[]) : string[]{
    console.log("Checking out books for " + customer);

    let booksCheckedOut : string[] = [];

    bookIds.forEach(id => {
        let book = GetBookById(id);
        if (book.available === true){
            booksCheckedOut.push(book.title);
        }
    });

    return booksCheckedOut;
}

function GetTitles(author :string): string[];
function GetTitles(available:boolean):string[];
function GetTitles(bookProperty:any):string[]{
    const allBooks = GetAllBooks();
    const foundTitles : string[] = [];

    if (typeof bookProperty == 'string'){
        for(let currentBook of allBooks){
            if (currentBook.author === bookProperty){
                foundTitles.push(currentBook.title);
            }
        }
    }
    else if (typeof bookProperty == 'boolean'){
        for(let currentBook of allBooks){
            if (currentBook.available === bookProperty){
                foundTitles.push(currentBook.title);
            }
        }
    }
    return foundTitles;
}

function  PrintBook(book: Book):void{
    console.log(book.title + ' by ' + book.author);
}

/* ----------------------------------------------------------------- */

let inventory : Array<Book> = [
    {id : 10, title : 'The C Programming Language', author: 'K & R', available:true, category:Category.Software},
    {id : 11, title : 'Code Complete', author: 'Steve McConnell', available:true, category:Category.Software},
    {id : 12, title : '8-Bit Graphics with Cobol', author: 'A. B.', available:true, category:Category.Software},
    {id : 13, title : 'Cool autoexec.bat Scripts', author: 'C. D.', available:true, category:Category.Software}
]

// let purgedBooks : Array<Book> = Purge(inventory);
// purgedBooks.forEach((item) => console.log(item.title));

let bookShelf : Shelf<Book> = new Shelf();
inventory.forEach((book) => bookShelf.add(book));

let firstBook : Book = bookShelf.getFirst();
console.log(firstBook.title);

let magazines : Array<Magazine> = [
    {title:'Programming Language Monthly', publisher:'Code Mags'},
    {title:'Literary Fiction Quarterly', publisher:'College Press'},
    {title:'FIve Points', publisher:'GSU'}
]

let magazineShelf : Shelf<Magazine> = new Shelf<Magazine>();
magazines.forEach((magazine) => magazineShelf.add(magazine));

let firstMagazine : Magazine = magazineShelf.getFirst();
console.log(firstMagazine.title);

let snakeCaseTitle = _.snakeCase('For Whom the Bell Tolls');
console.log(snakeCaseTitle);
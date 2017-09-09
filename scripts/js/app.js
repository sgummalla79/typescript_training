"use strict";
var Category;
(function (Category) {
    Category[Category["Biography"] = 0] = "Biography";
    Category[Category["Fiction"] = 1] = "Fiction";
    Category[Category["Children"] = 2] = "Children";
    Category[Category["History"] = 3] = "History";
    Category[Category["Poetry"] = 4] = "Poetry";
})(Category || (Category = {}));
;
function GetAllBooks() {
    var books = [
        { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
        { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction },
        { id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry },
        { id: 4, title: 'Moby Dick', author: 'Herman MelVille', available: true, category: Category.Fiction }
    ];
    return books;
}
function LogFirstBookAvailable(books) {
    var numberOfBooks = books.length;
    var firstAvailable = '';
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var currentBook = books_1[_i];
        if (currentBook.available == true) {
            firstAvailable = currentBook.Title;
        }
    }
    console.log('Number of Books : ' + numberOfBooks);
    console.log('First Available Book : ' + firstAvailable);
}
function GetBookTitlesByCategory(categoryFilter) {
    console.log('Getting Books in category : ' + Category[categoryFilter]);
    var allBooks = GetAllBooks();
    var filteredBooks = [];
    for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
        var currentBook = allBooks_1[_i];
        if (currentBook.category === categoryFilter)
            filteredBooks.push(currentBook.title);
    }
    return filteredBooks;
}
function LogBookTitles(titles) {
    for (var _i = 0, titles_1 = titles; _i < titles_1.length; _i++) {
        var title = titles_1[_i];
        console.log(title);
    }
}
function GetBookById(id) {
    var allBooks = GetAllBooks();
    return allBooks.filter(function (book) { return book.id == id; })[0];
}
function CreateCustomerID(name, id) {
    return name + id;
}
function CreateCustomer(name, age, city) {
    console.log('Name : ' + name);
    if (age)
        console.log('Age : ' + age);
    if (city)
        console.log('City : ' + city);
}
/* ----------------------------------------------------------------- */
CreateCustomer("Suman", null, "Bothell");
// let IdGenerator : (name : string, id : number) => string;
// IdGenerator = (name: string, id:number) => { return id + name};
// let myId = IdGenerator("Suman", 20);
// console.log(myId);
// const fictionBooks = GetBookTitlesByCategory(Category.Fiction);
// fictionBooks.forEach((title, idx) => console.log(++idx + ' - ' + title));
//# sourceMappingURL=app.js.map
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
function getallBooks() {
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
    var allBooks = getallBooks();
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
var fictionBooks = GetBookTitlesByCategory(Category.Fiction);
fictionBooks.forEach(function (title) { return console.log(title); });

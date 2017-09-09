enum Category{Biography, Fiction, Children, History, Poetry};

function GetAllBooks() : Array<any>{
    let books = [
        {id : 1, title : 'Ulysses', author: 'James Joyce', available:true, category:Category.Fiction},
        {id : 2, title : 'A Farewell to Arms', author: 'Ernest Hemingway', available:false, category:Category.Fiction},
        {id : 3, title : 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available:true, category:Category.Poetry},
        {id : 4, title : 'Moby Dick', author: 'Herman MelVille', available:true, category:Category.Fiction}
    ]

    return books;
}

function LogFirstBookAvailable(books):void{

    let numberOfBooks : number = books.length;
    let firstAvailable: string = '';

    for(let currentBook of books){
       if (currentBook.available == true) {
            firstAvailable = currentBook.Title;
       }
    }

    console.log('Number of Books : ' + numberOfBooks);
    console.log('First Available Book : ' + firstAvailable);
}

function GetBookTitlesByCategory(categoryFilter : Category) : Array<string>{
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

/* ----------------------------------------------------------------- */

CreateCustomer("Suman",null,"Bothell");

// let IdGenerator : (name : string, id : number) => string;
// IdGenerator = (name: string, id:number) => { return id + name};

// let myId = IdGenerator("Suman", 20);
// console.log(myId);

// const fictionBooks = GetBookTitlesByCategory(Category.Fiction);
// fictionBooks.forEach((title, idx) => console.log(++idx + ' - ' + title));


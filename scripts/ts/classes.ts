import {Book, DamageLogger, Author, Librarian} from './interfaces';

export class UniversityLibrarian implements Librarian{

    name : string;
    email: string;
    deaprtment : string;

    assistCustomer(custName:string){
        console.log(this.name + ' is assisting '+ custName);
    }
}

export abstract class ReferenceItem{
    private _publisher : string;
    static Department : string = "Research";

    constructor(public title:string, protected year : number){
        console.log('Creating a new Reference Item');
    }

    printItem() : void{
        console.log(`${this.title} was published in ${this.year}`);
    }

    get Publisher() : string{
        return  this._publisher.toUpperCase();
    }

    set Publisher(newPublisher : string){
        this._publisher = newPublisher;
    }

    abstract printCitation() :void;
}

export class Encyclopedia  extends ReferenceItem{
    constructor(newTitle : string, newYear : number, public edition : number){
        super(newTitle, newYear);
    }

    printItem() : void{
        super.printItem();
        console.log(`Edition : ${this.edition} - ${this.year}`);
    }

    printCitation():void{
        console.log(`${this.title} - ${this.year}`);
    }
}
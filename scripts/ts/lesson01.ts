class Greeting{
    disp_details(name : string, age : number, email?:string): void{
        console.log(name);
        console.log(age);
        if (email != undefined){
            console.log(email);
        }
    }
}

var obj = new Greeting();
obj.disp_details("suman", 37, 'a@a.com');
"use strict";
var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.disp_details = function (name, age, email) {
        console.log(name);
        console.log(age);
        if (email != undefined) {
            console.log(email);
        }
    };
    return Greeting;
}());
var obj = new Greeting();
obj.disp_details("suman", 37, 'a@a.com');

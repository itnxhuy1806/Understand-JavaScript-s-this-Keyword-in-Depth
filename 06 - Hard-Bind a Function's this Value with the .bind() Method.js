const person = {
     firstName: "John", 
     sayHi(){
         console.log(`Hi, my name is ${this.firstName}!`);
     }
 };
 
 const greet = person.sayHi.bind(person);
 
 const otherPerson = {
     firstName: "Jane"
 };

 greet()
 greet.call(otherPerson);
 
 Function.prototype.bind = function(thisArg, ...fixedArgs) {
     const func = this;
     return function(...args) {
         return func.apply(thisArg, [...fixedArgs, ...args]);
     };
 };
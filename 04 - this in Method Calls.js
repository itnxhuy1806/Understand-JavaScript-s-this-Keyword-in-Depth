//When a function is called as a method of an object, that function's this argument is set to the object the method is called on
{
     const person = {
          firstName: "John",
          sayHi() {
               console.log(`Hi, my name is ${this.firstName}!`);
          }
     };

     person.sayHi(); // this = person
     const greet = person.sayHi; // this = global
     greet();
}
console.log("--------------")
{
     const person = {
          firstName: "John",
          sayHi() {
               console.log(`Hi, my name is ${this.firstName}!`);
          }
     };
     setTimeout(person.sayHi, 1000); // this = global
     setTimeout(function () {
          person.sayHi();
     }, 1000);
     setTimeout(person.sayHi.bind(person), 1000);
}
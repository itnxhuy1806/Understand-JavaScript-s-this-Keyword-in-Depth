class Person {
     constructor(firstName, lastName) {
         this.firstName = firstName;
         this.lastName = lastName;
     }
 
     sayHi() {
         console.log(`Hi, my name is ${this.firstName}`)
     }
 };
 
 const person = new Person("John", "Doe");
 person.sayHi();
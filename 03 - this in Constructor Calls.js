// When a function is invoked as a constructor, a brand-new object is created for us automatically,
//and that new object is then used as the this binding for the function call.


{
     function Person(firstName, lastName) {
          console.log(this);
          this.firstName = firstName;
          console.log(this);
          this.lastName = lastName;
          console.log(this);
      }
      const person = new Person("Jane", "Doe");
}
console.log("------------------");

// We can also return an entirely different object from the constructor function.
{
     function Person(firstName, lastName) {
          this.firstName = firstName;
          console.log(this);
      
          return {
              firstName: "John",
              lastName: "Roe"
          };
      }
      
      const person = new Person("Jane", "Doe");
      console.log(person);
}
console.log("------------------");

// if we try to return anything else than an object, the JavaScript engine will simply ignore the value we provided and return the newly-created object instead
 {
     function Person(firstName, lastName) {
          this.firstName = firstName;
          this.lastName = lastName;
          return null;
      }
      const person = new Person("Jane", "Doe");
      console.log(person);
 }
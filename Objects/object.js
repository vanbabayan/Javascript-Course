// =============================================
// JavaScript Objects: Comprehensive Summary
// =============================================

// 1. What is an Object?
// An object is a collection of key-value pairs, where keys are strings (or Symbols) and values can be any data type.
let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

// =============================================
// 2. Creating Objects
// =============================================

// 2.1. Literal Notation
let person = {
  firstName: "Alice",
  lastName: "Smith",
  age: 25
};

// 2.2. Constructor (new Object())
let car = new Object();
car.make = "Toyota";
car.model = "Corolla";

// 2.3. Using Classes (ES6)
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
let user2 = new User("John", 30);

// =============================================
// 3. Accessing Object Properties
// =============================================

// 3.1. Dot Notation
console.log(user.name); // "John"

// 3.2. Bracket Notation
console.log(user["age"]); // 30

// =============================================
// 4. Adding and Modifying Properties
// =============================================

// 4.1. Adding a New Property
user.city = "New York";
console.log(user.city); // "New York"

// 4.2. Modifying a Property
user.age = 31;
console.log(user.age); // 31

// =============================================
// 5. Deleting Properties
// =============================================

delete user.city;
console.log(user.city); // undefined

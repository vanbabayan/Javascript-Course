
// =============================================
// 6. Object Methods
// =============================================

// 6.1. Creating a Method
let user3 = {
    name: "John",
    greet() {
      console.log("Hello, " + this.name);
    }
  };
  user3.greet(); // "Hello, John"
  
  // =============================================
  // 7. The "this" Keyword
  // =============================================
  
  // "this" refers to the current object context.
  let user4 = {
    name: "John",
    greet() {
      console.log("Hello, " + this.name);
    }
  };
  user4.greet(); // "Hello, John"
  
  // =============================================
  // 8. Iterating Over Object Properties
  // =============================================
  
  // 8.1. for...in Loop
  for (let key in user) {
    console.log(key + ": " + user[key]);
  }
  
  // 8.2. Object.keys()
  let keys = Object.keys(user);
  console.log(keys); // ["name", "age", "isAdmin"]
  
  // 8.3. Object.values()
  let values = Object.values(user);
  console.log(values); // ["John", 30, true]
  
  // 8.4. Object.entries()
  let entries = Object.entries(user);
  console.log(entries); // [["name", "John"], ["age", 30], ["isAdmin", true]]
  
  // =============================================
  // 9. Copying Objects
  // =============================================
  
  // 9.1. Shallow Copy
  let clone = Object.assign({}, user);
  let clone2 = { ...user };
  
  // 9.2. Deep Copy
  let deepClone = JSON.parse(JSON.stringify(user));
  
  // =============================================
  // 10. Nested Objects
  // =============================================
  
  let user5 = {
    name: "John",
    address: {
      city: "New York",
      zip: "10001"
    }
  };
  console.log(user5.address.city); // "New York"
  
  // =============================================
  // 11. Static Object Methods
  // =============================================
  
  // 11.1. Object.create()
  let animal = { eats: true };
  let rabbit = Object.create(animal);
  console.log(rabbit.eats); // true
  
  // 11.2. Object.freeze()
  Object.freeze(user);
  user.name = "Alice"; // No error, but value won't change
  
  // 11.3. Object.seal()
  Object.seal(user);
  user.age = 40; // Allowed, but adding new properties is not
  
  // =============================================
  
  // =============================================
  // 13. Practical Examples
  // =============================================
  
  // 13.1. Book Object
  let book = {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    year: 2008,
    getInfo() {
      return `${this.title} by ${this.author}, ${this.year}`;
    }
  };
  console.log(book.getInfo());
  
  // 13.2. Library Object with Nested Objects
  let library = {
    name: "City Library",
    books: [
      { title: "1984", author: "George Orwell" },
      { title: "Brave New World", author: "Aldous Huxley" }
    ],
    addBook(book) {
      this.books.push(book);
    }
  };
  library.addBook({ title: "Fahrenheit 451", author: "Ray Bradbury" });
  console.log(library.books);
 
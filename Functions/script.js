// ......................  Functions

//  function declaration


function name(parameter1, parameter2, ... parameterN) {
    // body
   }

   function showMessage() {
    alert( 'Hello everyone!' );
  }
  
  showMessage();
  showMessage();

  //  local variables

//   A variable declared inside a function is only visible inside that function.

function showMessage() {
    let message = "Hello, I'm JavaScript!"; // local variable
  
    alert( message );
  }
  
  showMessage(); // Hello, I'm JavaScript!
  
  alert( message ); // <-- Error! The variable is local to the function



  //  Outer variables

//  A function can access an outer variable as well, for example:



  let userName = 'John';

function showMessage2() {
  let message = 'Hello, ' + userName;
  alert(message);
}

showMessage2(); // Hello, John


  // function parameters

  function showMessage3(from, text) { // parameters: from, text
    alert(from + ': ' + text);
  }
  
  showMessage3('Ann', 'Hello!'); // Ann: Hello! (*)
  showMessage3('Ann', "What's up?"); // Ann: What's up? (**)

  // Default values

  function showMessage4(from, text = "no text given") {
    alert( from + ": " + text );
  }
  
  showMessage4("Ann"); // Ann: no text given


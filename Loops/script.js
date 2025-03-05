//.................  Loops

// while loop

while (condition) {
    // code
    // so-called "loop body"
  }

// While the condition is truthy, the code from the loop body is executed.
// For instance, the loop below outputs i while i < 3:

let i = 0;
while (i < 3) { // when i becomes 3, the condition becomes falsy, and the loop stops
  alert( i );
  i++;
}



// do while loop


do {
    // loop body
  } while (condition);

// The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.
//For example:


let k = 0;
do {
  alert( k );
  k++;
} while (k < 3);



//  for loop

for (begin; condition; step) {
    // ... loop body ...
  }

//Let’s learn the meaning of these parts by example. The loop below runs alert(i) for i from 0 up to (but not including) 3:


//  Breaking the loop

//Normally, a loop exits when its condition becomes falsy.
//But we can force the exit at any time using the special break directive.
//For example, the loop below asks the user for a series of numbers, “breaking” when no number is entered:

let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Sum: ' + sum );



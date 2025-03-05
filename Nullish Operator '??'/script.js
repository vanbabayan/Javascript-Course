//.................. Nullish Operator

// The nullish coalescing operator (??) returns the first operand if it is not null or undefined
// a ?? b = a
// if a define 
// a ?? b = b
// if a is null or undefined, then b is returned


// result a ?? b = (a !== null && a !== undefined) ? a : b;


let user;

console.log(user ?? "Anonymous"); // Anonymous (user is undefined)

user = 'ivan'

console.log(user ?? 'Anonymous') // Ivan (user is defined)



let firstName = null;
let lastName = null;
let nickName = "SuperCoder";

console.log(firstName ?? lastName ?? nickName ?? 'Anonymous'); // SuperCoder

// Checks firstName → it's null, moving on.
// Checks lastName → it's null, moving on.
// Checks nickName → it's "Суперкодер", which is a defined value, so it is selected.
// "Аноним" is not checked because a suitable value has already been found.



let height = null;
let width = null;


let area = (height ?? 100) * (width ?? 50);

alert(area); // 5000

//....................  Nullish coalescing assignment (??=)


let userAge = null;

if (userAge === null || userAge === undefined)   userAge = 18; //  ===  x ??= y

// if x is null or undefined, then y is assigned to x


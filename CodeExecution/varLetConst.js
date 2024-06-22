// console.log(a);  can be accessed before initialization
var a = 10;
console.log(a);
a = 20;
console.log(a);
var a = 30;
console.log(a);

// var --> re-assignment and re-initialization allowed

// console.log(b);
// using let, a variable cannot be accessed before initialization/declaration
let b = 10;
console.log(b);
b = 20; // re-assignment of let variables allowed.
console.log(b);
// let b = 30; re-declaration not allowed in let


// console.log(c);
// cannot be accessed before declaration or initialization.
const c = 10;
console.log(10);
// c = 20;
// console.log(c);  re-assignment not allowed for const.
// re-declaration not allowed for const.
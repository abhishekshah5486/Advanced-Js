const user = {
    username : 'abhishek',
    price : '2400',
    callUser : function(){
        console.log(`${this.username}, welcome to IIT Bombay.`)
        console.log(this);
    }
}
user.callUser();
// let fn = user.callUser;
// fn(); // this keyword is pointing to the global varible username, there is no global variable username in window object => undefined
// this keyword refers to the current context / current object

// console.log(this);
// here this keyword refers to an empty object in the node environment

function chai(){
    let username = 'abhishek';
    console.log(this.username);
}
global.username = 'Abhishek';
// Explicitly Attaching a global variable to the global object in node.js environment
// In node.js environment, this refers to global object
// In node.js environment in global scope, this refers to module.exports which is an empty object {}
// by default
// using var attaches global variables to window object in browser environment
// Inside broswer environment, this refers to the window object
function chai(){
    console.log(this);
    console.log(this.username);
}
// this keyword shows the context behaviour only inside an object and not functions
// this keyword inside a function points to a global object in the node environment.
chai();
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

console.log(this);
// here this keyword refers to an empty object in the node environment

// function chai(){
//     let username = 'abhishek';
//     console.log(this.username);
// }
function chai(){
    console.log(this);
}
// this keyword works only inside an object and not functions
// this keyword inside a function points to a global object in the node environment.
chai();
// Immediately Invoked Functions
// Named and Anonymous IIFEs
// IIFEs help prevent the polluting of global scope

// function chai(){
//     let username = 'Abhishek';
//     console.log(username);
// }
// chai();
// console.log(this.username);

// Named IIFE
// () --> function written inside
// () --> execution call
// ( function chai(){
//     console.log('Database Connected.');
// })();

// ( chai => {
//     console.log('Database not Connected.');
// })();

// Anonymous IIFE
// ( function() {
//     console.log('Database not Connected.');
// })();

// ( () => {
//     console.log('Database not Connected.');
// })();


( (name) => {
    console.log(`${name}, database not connected.`);
})('MySQL');

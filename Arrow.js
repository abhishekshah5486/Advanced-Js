// const chai = function(){
//     let username = 'abhishek';
//     console.log(username);
// }

// Arrow function in javascript
const chai = () => {
    let username = 'abhishek';
    console.log(username);
}
chai();

const addTwo = (num1, num2) => {
    console.log(num1 + num2);
}
addTwo(1, 2);

// Implicit return
// const subTwo = (num1, num2) => num1-num2;
// console.log(subTwo(7, 4));

// const subTwo = (num1, num2) => ( num1-num2 );
// console.log(subTwo(7, 4));

const subTwo = (num1, num2) => {
    return (num1-num2);
};
console.log(subTwo(7, 4));
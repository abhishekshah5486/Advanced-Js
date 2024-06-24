// let arr = [1, 2, 3, 4, 5];

// const initial = 0;
// const sumWithInitial = arr.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue
// }, initial);
// console.log(sumWithInitial);


let shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 2499
    },
    {
        itemName: "web design course",
        price: 1999
    },
    {
        itemName: "data science course",
        price: 3499
    },
    {
        itemName: "react course",
        price: 2799
    },
    {
        itemName: "angular course",
        price: 2699
    },
    {
        itemName: "typescript course",
        price: 2399
    }
];

// Add all the prices inside this shopping cart for all the courses.
const totalPrice = shoppingCart.map( (course) => {return course.price})
                               .reduce( (acc, currVal) => (acc + currVal), 0);
console.log(totalPrice);
console.log(shoppingCart.reduce( (acc, item) => (acc + item.price), 0));

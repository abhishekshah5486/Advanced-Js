let arr = [1, 2, 3, 4, 5];

const initial = 0;
const sumWithInitial = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, initial);
console.log(sumWithInitial);
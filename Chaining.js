const nums = [1, 2, 4, 6, -4, 9, 3, 65, -10];

let newNums = nums.map( (num) => {return num + 10})
                  .filter( (val) => {if (val % 2 == 0) return val})
                  .filter( (val) => (val >= 10));
console.log(newNums);
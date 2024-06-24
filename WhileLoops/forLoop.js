let arr = [1,2,0, -10, 6];
console.log(...arr);

// print all the elements of the array except 0
for(let index=0; index<arr.length; index++){
    if (arr[index] == 0){
        continue;
    }
    console.log(`${arr[index]}, ${index}`);
}
let arr = [1,2,0, -10, 6];
console.log(...arr);

// print all the elements of the array except 0
for(let index=0; index<arr.length; index++){
    if (arr[index] == 0){
        continue;
    }
    console.log(`${arr[index]}, ${index}`);
}

let colors = ['red', 'blue', 'green'];
for (const color of colors) {
    console.log(color);
}

let str = 'greetings everyone !';
for (const ch of str){
    console.log(ch);
}
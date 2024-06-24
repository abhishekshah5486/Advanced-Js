// Maps in js

const map = new Map();
map.set('IN', 'India');
map.set('USA', 'United States of America');
map.set('UK', 'United Kingdom');
map.set('LA', 'Los Angeles');

// console.log(map);
// console.log(map.get('UK'));
// console.log(map.keys());
// console.log(map.values());
// console.log(map.delete('USA'));
// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, value);
// }

const myObject = {
    'username' : 'Abhishek',
    'email' : 'abhishek.shah5486@gmail.com',
    'cgr' : 9.22
}
// Objects are not iterable
// let keys = Object.keys(myObject);
// console.log(keys);
// console.log(myObject.email);
// for (const key of keys) {
//     console.log(myObject[key]);
// }
// let values = Object.values(myObject);
// for (const val of values) {
//     console.log(val);
// }


// for (const key in myObject){
//     console.log(key);
//     console.log(myObject[key]);
// }

let keys = Object.getOwnPropertyNames(myObject);
console.log(keys);
for (const key of keys){
    console.log(myObject[key]);
}

let listKeys = Reflect.ownKeys(myObject);
for (const key of listKeys){
    console.log(key);
}
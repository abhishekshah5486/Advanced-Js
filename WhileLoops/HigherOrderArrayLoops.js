// Maps in js

const map = new Map();
map.set('IN', 'India');
map.set('USA', 'United States of America');
map.set('UK', 'United Kingdom');
map.set('LA', 'Los Angeles');

console.log(map);
console.log(map.get('UK'));
console.log(map.keys());
console.log(map.values());
console.log(map.delete('USA'));
console.log(map);
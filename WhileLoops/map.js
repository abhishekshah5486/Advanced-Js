const names = ['Abhishek', 'Divyanshu', 'Kushagra', 'Anushri'];
names.map((name) => {console.log(name)});
const arr = names.map(function(name){
    return name;
})
const arr2 = names.map((name) => name);
console.log(arr2);
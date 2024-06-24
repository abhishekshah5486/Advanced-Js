let username = 'Abhishek';
function outer(){
    function inner(){
        console.log("inner", username);
    }
    inner();
}   
outer();
console.log(username);
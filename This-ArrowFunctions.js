const user = {
    username : 'abhishek',
    price : '2400',
    callUser : function(){
        console.log(`${this.username}, welcome to IIT Bombay.`)
        console.log(this);
    }
}
user.callUser();
// let fn = user.callUser;
// fn(); // this keyword is pointing to the global varible username, there is no global variable username
console.log(this);

function chai(){
    let username = 'abhishek';
    console.log(this.username);
}
chai();

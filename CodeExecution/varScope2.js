var a = 10;
function fn(){
    console.log("Line number 4",a);
    var a = 20;
    a++;
    console.log("Line number 6", a);
    if(a){
        var a = 30;
        a++;
        console.log("Line number 11", a);
    }
    console.log("Line number 12", a);
}
fn();
console.log("Line number 2", a);

// var is a function scope, it is only treated differently inside a fn when re declared
// Expected output
// Line number 4 undefined
// Line number 6 21
// Line number 11 31
// Line number 12 31
// Line number 2 10
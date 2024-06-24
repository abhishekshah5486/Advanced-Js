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
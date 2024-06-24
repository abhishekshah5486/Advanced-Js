let a = 10;
console.log("Line number 2", a);
function fn(){
    console.log("Line number 4", a);
}
fn();
console.log("Line number 7", a);

// Expected output 
// Line number 2 10
// Line number 4 10
// Line number 7 10
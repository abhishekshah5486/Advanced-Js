let a = 10;
console.log("Line number 2", a);
function fn(){
    // console.log("Line number 4", a);
    let a = 20;
    a++;
    console.log("Line number 7", a);
    if (a){
        let a = 30;
        a++;
        console.log("Line number 11", a);
    }
    console.log("Line number 13", a);
}
fn();
console.log("Line number 7", a);

// Expected Output
// Line number 2 10
// Line number 4 undefined ( cannot access a before initialization )
// Line number 7 21
// Line number 11 31
// Line number 13 21
// Line number 7 10
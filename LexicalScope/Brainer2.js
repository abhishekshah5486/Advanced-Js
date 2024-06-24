
function fxn(){
    console.log(a);
    var a = 20;
    function gxn(){
        console.log(a);
    }
    gxn();
}
fxn();
console.log(a);
// Expected output 
// undefined
// 20
// a is not defined
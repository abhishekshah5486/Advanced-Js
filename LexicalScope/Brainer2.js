
function fxn(){
    console.log(a);
    var a = 20;
    function gxn(){
        console.log(a);
    }
    gxn();
}
fxn();

// Expected output 
// undefined
// 20
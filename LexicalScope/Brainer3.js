function fxn(){
    // console.log(a);
    function gxn(){
        var a = 30;
        function gxn2(){
            console.log(a);
        }
        gxn2();
    }
    gxn();
}
fxn();

// Expected output
// a is not defined
// if a variable is not found in the current execution context, it searches for it in the lexical scope
// the lexical scope inside an exec context points to the memory of its parent exec context
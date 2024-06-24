var a = 10;
{
    var a = 20;
    console.log(a);
}
console.log(a);
// var is a function scope and not block scope
// var will be treated different only inside a function => therefore a fn scope
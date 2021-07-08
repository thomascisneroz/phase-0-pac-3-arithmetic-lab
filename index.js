const a = "1"
const b = "2"

function add(a, b) {
    return (a+=b);
}
function subtract(a, b) {
    return (a-=b);
}
function multiply(a, b) {
    return (a*=b);
}
function divide(a, b){
    return (a/=b);
}
function increment(a) {
    return (++a);
}
function decrement(b) {
    return (--b);
}
function makeInt(a) {
    return (parseInt(a, 10));
}
const decimal = ".5"
function preserveDecimal(decimal) {
    return (parseFloat(decimal));
}
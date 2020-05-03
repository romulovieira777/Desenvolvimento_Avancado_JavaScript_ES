//lazy evaluation
function randomNumber() {
    return Math.random() * 10;    
}

function Multiply(a, b = 1) {
    return a * b;
}

console.log(Multiply(5, 5));

// Generators

function hello() {
    console.log('Hello');
    yield;

    console.log('Function!');
}

const it = hello();

console.log(it.next());
console.log(it.next());
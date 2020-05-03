//rest operator ...

const sum = (...rest) => {

};

const multiply = (...args) => args.reduce((acc, value) => acc * value, 1)



console.log(sum(5, 5, 5, 2, 3));


/*function sum(a, b) {
    var value = 0;

    for (var i = 0; i <arguments.length; i++){
        value =+ arguments[i];
    }

    return value;
}

console.log(sum(5, 5, 5, 2, 3));*/
const apple = {
    value: 2,
};

const orange = {
    value: 3,
};

function mapComThis(arr, thisArg) {

    return arr.map(function (item) {

        return item * thisArg.value;

    }, thisArg);

}

const numeros = [1, 2];

console.log('this -> apple', mapComThis(numeros, apple));
console.log('this -> orange', mapComThis(numeros, orange));
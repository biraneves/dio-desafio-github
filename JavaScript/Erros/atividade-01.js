function validaArray(arr, num) {

    try {

        if (!arr || !num) 
            throw new ReferenceError('Parâmetros necessários (2)');

        if (typeof(arr) !== 'object') 
            throw new TypeError('Array precisa ser do tipo \'object\'');

        if (typeof(num) !== 'number') 
            throw new TypeError('Argumento num precisa ser do tipo \'number\'');

        if (arr.length !== num) 
            throw new RangeError('Tamanho inválido');
        
        return arr;

    } catch (e) {

        if (e instanceof ReferenceError) {

            console.log('Erro do tipo ReferenceError!');

        } else if (e instanceof TypeError) {

            console.log('Erro do tipo TypeError');

        } else if (e instanceof RangeError) {

            console.log('Erro do tipo RangeError');

        } else {

            console.log('Tipo de erro não esperado: ' + e.name);

        }

        console.log(e.message);

    }

}

arr = [1, 2, 3, 4, 5];

console.log(validaArray());
console.log(validaArray(arr));
console.log('string', 5);
console.log(3, 5);
console.log(validaArray(arr, 3));
console.log(validaArray(arr, 5));

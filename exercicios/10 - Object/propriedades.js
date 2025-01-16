var produto = new Object()

produto.nome = 'Caneta'
produto.preco = 1.99
produto.cor = 'azul'

console.log(produto)

// Ou: var produto = {nome: 'caneta', preco: 1.99, cor = 'azul'}

/*
* With bracket notation you can also use a variable inside the brackets to select   the keys of an object. This can be especially helpful when working with functions:
*/
let returnAnyProp = (objectName, propName) => objectName[propName];
 
console.log(returnAnyProp(produto, 'cor')); // Returns 'azul'

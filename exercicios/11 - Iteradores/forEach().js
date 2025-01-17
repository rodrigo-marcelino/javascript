/*
    * Higher-order function: takes one or more functions as arguments.
    * Callback functions: function that is passed as an argument to another function.

    * VEJA MAIS MÉTODOS DE ARRAYS NA DOCUMENTAÇÃO: 
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
    https://www.codecademy.com/resources/docs/javascript/functions?page_ref=catalog

============================== forEach() =====================================
    1) groceries.forEach() chama o método forEach() do vetor;

    2) .forEach() toma como argumento uma função, ou seja, uma callback function. 

    3) .forEach() itera pelo array e executa a callback function para cada elemento. Durante cada iteração, o elemento atual é passado como argumento para a callback function.

    4) .forEach() não retorna nenhum valor, ou melhor 'undefined'.
*/
    const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
    console.log('Usando o .forEach(): ')
    // Iterate over fruits below (Arrow function = callback function)
    fruits.forEach( itemDoArray => console.log(`I want to eat a ${itemDoArray}`));

/*
====================================== map() ======================================

1) A diferença para o forEach(): o método .map() retorna um novo array
*/
    const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

    // Create the secretMessage array below
    const secretMessage = animals.map(animal => {
    return animal[0];
    })

    console.log('Usando .map(): '+ secretMessage.join(''));
/*
======================================= filter() ==================================

1) Mesmo comportamento do map(), porém o novo array está filtrado por alguma condição
*/
    const randomNumbers = [375, 200, 3.14, 7, 13, 852];

    // Call .filter() on randomNumbers below
    const smallNumbers = randomNumbers.filter(num => num < 250)

    console.log('Usando o .filter(): ' + smallNumbers)



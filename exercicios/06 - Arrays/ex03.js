var megasena = new Array()

for (let i = 0; i < 6; i++){
    let num = Math.ceil(Math.random()*60)
    if(megasena.indexOf(num) < 0){
        megasena.push(num)
    }
} // end for para adicionar +5 números

// Documentação para o objeto global Math: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

console.log(megasena.sort((a, b) => a - b))

// Para organizar um vetor de números, precisamos fazer da seguinte maneira
// Quando aplicamos somente o método sort(), o js ordena os númeors como string
/* => (Arrow Functions): forma mais curta de escrever funções
    (parâmetros) => { corpo da função }

    EXEMPLO:

        // Função tradicional
            function ordenar(a, b) {
                return a - b;
            }

    // Arrow function
        const soma = (a, b) => a - b;

*/

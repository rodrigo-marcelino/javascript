// Pesquisa dentro de um array

var frutas =['Uva', 'Maçã', 'Abacaxi', 'Babana']
// indexOf() -> retorna o índice de um elemento se ele estiver dentro do array, senao ele retorna -1
var pesquisa = frutas.indexOf('maçã')

if (pesquisa < 0){
    console.log('"maçã" não está dentro do array')
    console.log('Sendo assim, JavaScript é uma linguagem Case Sensitive')
} 
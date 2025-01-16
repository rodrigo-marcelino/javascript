/*
 * As arrow functions são uma maneira simplificada de escrever funções
 * Sintaxe
 * (param1, param2, ..., paramN) => { corpo da função }
 * nenhum param: () => { corpo da função }
 * apenas 1 param: param => { corpo da função }
 * se for uma função single-line, não é necessário colocar o corpo da função entre {}
*/

const squareNum = (num) => {
    return num * num;
  };

const squareNum1 = num => num * num;

console.log(squareNum(5) + " = " + squareNum1(5))
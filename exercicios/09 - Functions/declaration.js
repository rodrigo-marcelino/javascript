/*
    * Uma função é um conjunto reutilizável de instruções para executar uma tarefa
*/

// Defining the function with default values, ou seja, se não passarmos os argumentos na hora da chamada, os parâmetros assumirão valores padrões
function sum(num1 = 6, num2 = 1) {
    return num1 + num2;
  }
  
// Calling the function
console.log(sum(2, 4));

// Anonymous function
const rocketToMars = function () {
    return 'BOOM!';
  };

console.log(rocketToMars())
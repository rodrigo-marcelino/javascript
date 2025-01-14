// Na linguagem JavaScript, temos um tipo especial de comparador: ===
// Esse comparador compara o valor da variável e seu tipo
// O operador de comparação ==, apenas verifica se os valores são iguais

let a = 3;
let b = '3';
let c = 3;

if(a === c){
    console.log(`A variável a = ${a} do tipo: ${typeof(a)}`)
    console.log(`A variável c = ${c} do tipo: ${typeof(c)}`)
    console.log('São iguais em valor e tipo')
    console.log('-------------------')
} 

if (a == b){
    console.log(`A variável a = ${a} do tipo: ${typeof(a)}`)
    console.log(`A variável b = ${b} do tipo: ${typeof(b)}`)
    console.log('São iguais apenas em valor')
}
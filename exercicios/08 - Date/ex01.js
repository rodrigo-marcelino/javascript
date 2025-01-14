var agora = new Date()
// Dica: criar um array de meses, pois getMonth() retorna um número
var meses = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out']
var semana = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab']

console.log(`Dia: ${agora.getDate()}`)
console.log(`Mês: ${meses[agora.getMonth()]}`)
console.log(`Ano: ${agora.getFullYear()}`)
console.log(`Dia da semana: ${semana[agora.getDay()]}`)

var aniversario = new Date(1970, 4, 16) 
console.log('A data de aniversário da minha mãe é: ')
console.log(`Dia: ${aniversario.getDate()}`)
console.log(`Mês: ${meses[aniversario.getMonth()-1]}`)
console.log(`Ano: ${aniversario.getFullYear()}`)
console.log(`Dia da semana: ${semana[aniversario.getDay()]}`)



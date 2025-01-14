var curso = 'Curso JavaScript Fundamental'
var espaco = ''
var primeira = ''

for(let i = 0; i <= curso.length; i++){
    espaco = curso.charAt(i)
    if(espaco == ' '){
        primeira = curso.substring(0, i)
        break
    }
}

console.log(`A primeira palavra da frase ${curso} é = ${primeira}`)

var nome = 'Rodrigo Martins Marcelino'
var nomeCompleto = nome.split(' ')

console.log(`Primeiro nome: ${nomeCompleto[0]}`)
console.log(`Último nome: ${nomeCompleto[nomeCompleto.length-1]}`)

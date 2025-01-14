var frase = 'Corinthians Paulista do Meu Coração'

var primeraLetra = frase.charAt(0)
let letra = ''
let palavra = ''
for (let i = 0; i < frase.length; i++){
    letra = frase.charAt(i)
    if(letra != ' '){
        palavra += frase.charAt(i)
    } else{
        break
    }
}

console.log(`a primeira palavra da frase é ${palavra}`)
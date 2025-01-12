console.log("Hello, World!");
console.log('Testando o NodeJS no VSCode')

/*
    A estrutura condicional da linguagem JavaScript é semelhante à estrutura da linguagem Java

    if(cond1){
    
    } else if (cond2){
     
    }

    --------------------------------------
    switch(expressão){
        case v1:
            break;
        case v2:
            break;
        default:
            break;
    }

*/

var agora = new Date();
var dia = agora.getDay();
console.log("Hoje é: ")
switch(dia){
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Segunda-feira');
        break;
    case 2:
        console.log('Terça-feira');
        break;
    case 3:
        console.log('Quarta-feira');
        break;
    case 4:
        console.log('Quinta-feira');
        break;
    case 5:
        console.log('Sexta-feira');
        break;
    case 6:
        console.log('Sábado');
        break;
    default:
        console.log('Dia inválido')
}
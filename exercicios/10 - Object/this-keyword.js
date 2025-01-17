/**
 *  A palavra-chave this em JavaScript é usada para se referir ao contexto atual de execução. O valor de this depende de como (e onde) uma função é chamada, e isso pode gerar comportamentos diferentes em situações específicas.
 */

const pessoa = {
    nome: "Rodrigo",
    idade: 22,
    apresentar() {
      console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    },
  };
  
  pessoa.apresentar(); // Saída: Meu nome é Rodrigo e tenho 22 anos.
  
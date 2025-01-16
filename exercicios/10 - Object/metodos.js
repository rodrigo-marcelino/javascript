/*
    * Quando uma propriedade de um objeto é uma função, tal função é um método
    * propriedade = o que objeto tem | método: o que o objeto faz
*/
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
let alienShip = {
  retreat(){
    console.log(retreatMessage)
  },
  takeOff(){
    console.log('Spim... Borp... Glix... Blastoff!')
  }
}

alienShip.retreat()
alienShip.takeOff()
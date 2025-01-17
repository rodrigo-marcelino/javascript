/*
Objetos aninhados: objeto dentro de um objeto
objeto spaceship = [crew]
objeto crew = [captain, 'chief officer', medic, translator,]
*/
let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

/* 
    *o for...in é utilizado para varrer objetos literais em que as propriedades não consguimos numerar
    * for (let key in objeto) {
         Acessar a propriedade (key) e o valor (objeto[key])
    }

*/
for (let member in spaceship.crew){
    console.log(`${member}: ${spaceship.crew[member].name}`)
}
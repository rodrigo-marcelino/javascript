var salada = new Array();
salada [0] = 'Alface';
salada[1] = 'Tomate';
function viewArray(array){
    console.log(`O array salada tem ${array.length} ingredientes:`);
        for (let ingrediente of array){
            console.log(`o ingrediente ${ingrediente} está na posição ${array.indexOf(ingrediente)}`)
        }   
}
/* 
    var salda = ['Alface', 'Tomate']
*/

// Adicioonar elemento no final
salada.push('Pepino')

// Adicionar no início
salada.unshift('Azeite')

// Visualizando os elementos do array
salada.sort() //Por ordem alfabética
viewArray(salada);

// Excluir o último elemento
salada.pop();
//Excluir o primeiro elemento
salada.shift();

// Visualizando os elementos do array
viewArray(salada);
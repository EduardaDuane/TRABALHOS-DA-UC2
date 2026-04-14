// Arrays são listas de elementos ou uma estrutura de dados maior

/*const listaCompras = ["batata" , "alface" , "queijo"]
console.log(listaCompras)*/   

//Arrays armazena elementos de qualquer tipo

/*const meuArrayDiverso = ["banana", 15, true]
console.log(meuArrayDiverso)*/

/*arrayFrutas = ["banana", "maça" , "tomate"]
const segundoItem = arrayFrutas[2]
console.log(segundoItem)*/

 
/*const racasArray = ["Golden Retriever", "Poodle", "Bulldog", "Salsicha", "Labrador"]
console.log(racasArray)

arrayRacas = ["Golden Retriever", "Poodle", "Bulldog", "Salsicha", "Labrador"]
   const Raca = arrayRacas[0]
   console.log(Raca)*/

//Propriedade length: nos diz qual é a quantidade de itens de um array

/*const pokemon = ["bulbasauro", "squirtle", "charmander"]
const quantidadeItens = pokemon.length
console.log(quantidadeItens)*/

/*const numeros = [1, 2, 3]
numeros.push (4)
console.log(numeros)
console.push(5, 6, 7, 8)
console.log(numeros)*/


///////////////////////////////////////////////////////////////////////////

/*let cores = ["azul", "verde"]
cores.unshift('vermelho')
console.log (cores)*/

// --- Exemplo com pop() ---
let meusPeixes = ["palhaço", "mandaria", "esturjão"];
meusPeixes.pop();
console.log(meusPeixes);

/* ----------------------------------------------------
Propriedades ou Método splice(i, n): remove n elementos a 
partir da posição i do array
------------------------------------------------------- */

let letras = ["A", "B", "C", "D", "E", "F", "G", "H"];
//indices(i)  0    1    2    3    4    5    6    7

console.log("Array completa: ", letras);

// Aplicando o método splice(i, n)
// da array letras, na posição 2 ("C") remova 1 elemento (o próprio "C")
let letrasSemUmElemento = letras.splice(2, 1);
console.log("Elementos retirados da Array letras com splice(2,1): ", letrasSemUmElemento);

console.log("Array letras ficou assim: ", letras);

// da array letras, na posição 3 ("D") remove 2 ("E" e "F")
// Nota: como o "C" já foi removido, as posições mudaram!
let letrasSemDoisElemento = letras.splice(3, 2);
console.log("Elementos retirados da Array letras com splice(3,2): ", letrasSemDoisElemento);

//Propriedade ou Método concat() : junta doisou mais arrays para formar um novo array
let frutas2 = ["maçã" , "banana"]
let legumes = ["cenoura" , "batata"]
let alimentos =frutas2.concat(legumes)
console.log(alimentos)


const prompt = require ('prompt-sync')({sigint: true})

/*function poderImprimir(){
    const poder = (prompt("Digite o seu superpoder favorito? "))

   console.log(`Uau! Ser capaz de ${poder} seria incrível!`)
}

poderImprimir()*/

function criarApelido(){
    const primeiroNome = (prompt("Digite o seu primeiro nome: "))
    const animal = (prompt("Digite o nome de um animal: "))

    console.log(`Seu novo nome é : ${primeiroNome} ${animal} !`)
}
criarApelido()
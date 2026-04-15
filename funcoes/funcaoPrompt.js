const prompt = require ('prompt-sync')({sigint: true})

function cumprimentarUsuario(){
    const nome = prompt('Digite seu nome cara:')

    console.log(`Olá, ${nome}!!! Seja bem vindo(a) a turma TDS261T!`)

}
cumprimentarUsuario()


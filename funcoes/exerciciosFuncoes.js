///////////////////  EXERCÍCIO 1 ///////////////////////////////////////

/*function imprimirTDS(){

console.log("TDS")}

imprimirTDS()*/

///////////////////  EXERCÍCIO 3 ///////////////////////////////////////
/*function imprimirSaudar(nome, turno){                           
                                                   
    console.log(`Ótima ${turno} , ${nome} !`)}

    imprimirSaudar("José" , "manhã")
    imprimirSaudar("Maria" , "tarde")
    imprimirSaudar("João" , "noite")*/

///////////////////  EXERCÍCIO 4 ///////////////////////////////////////

/*function converterParaCelsius(fahrenheit){
    const Celsius = (fahrenheit - 32) * 5/9
    console.log(`${fahrenheit}°F equivalente a ${Celsius.toFixed(1)} °C`)
}
converterParaCelsius(98.3)*/

function converterPila(dinheiro) {
    const dolar = dinheiro * 0.20
    const bolivar = dinheiro * 95.5
    const euro = dinheiro * 0.17

    console.log("Dólar: " , dolar)
    console.log("Bolívar: " , bolivar)
    console.log("Euro: " , euro)
}

converterPila(3000)

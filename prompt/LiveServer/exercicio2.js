

let ingrediente1= prompt ("Você está fazendo uma poção mágica. Escolha o seu primeiro ingrediente:")
let ingrediente2 = prompt ("Escolher seu segundo ingrediente:")

let soma1= prompt ("Quantas gotas você irá utilizar do primeiro ingrediente " + ingrediente1 + "?")
let soma2= prompt ("Quantas gotas você irá utilizar do segundo ingrediente " + ingrediente2 + "?")

soma1 = Number(soma1)
soma2 = Number (soma2)

let totalsoma = soma1 + soma2


alert("Você irá utilizar " + ingrediente1 + " e " + ingrediente2 + " assim terá " + totalsoma + " gotas em sua poção mágica. ")


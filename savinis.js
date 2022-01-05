// Variáveis, são um espaço na memória do computador para gaurdar algum valor.
let PesoPeca  = 100

//pesoPeca - Camel Case
//peso_peca - Snake Case
//PesoPeca - Pascal Case

if (PesoPeca > 100) {
    console.log("Peso maior que 100g")
} else {
    console.log("Peso insuficiente, não é possível cadastrar")
}

let numeroPecas = 10

if (numeroPecas < 10) {
    console.log("Ainda há espaço na caixa, podemos cadastrar esta peça")
} else {
    console.log("Não há espaço disponível na caixa")
}

let nomePeca = "AP"

console.log("O comprimento do nome da peça é:", nomePeca.length)

if(nomePeca.length < 3)  {
    console.log("Nome da peça muito curto, impossível cadastrar")
} else {
    console.log("Nome da peça adequado, podemos cadastrar")
}


import * as leitor from "readline-sync"

let produto: String

while(true){
    produto = leitor.question("Digite o nome do produto (A, B ou C)")

    switch (produto) {
        case "A":
            console.log("O preço do produto é R$299,00")
                break

        case "B":
            console.log("O preço do produto é R$159,99")
                break

        case "C":
            console.log("O preço do produto é R$279,99")
                break
    }
}
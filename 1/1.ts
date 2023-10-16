import * as leitor from "readline-sync"

let usern: number

while (true) {
    usern = leitor.questionInt("Insira um numero de 1 a 3: ")

    switch (usern) {
        case 1:
            console.log("Você digitou o numero 1.")
            break

        case 2:
            console.log("Você digitou o numero 2. ")
            break

        case 3:
            console.log("Você digitou o numero 3.")
            break

        default:
            console.log("Numero invalido. Tente novamente.")

    }
}
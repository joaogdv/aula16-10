import * as leitor from "readline-sync"

let numUser: number

while(true){
    numUser = leitor.questionInt("Digite um numero de 1 a 12: ")
    
    switch (numUser){
        case 1: "janeiro" 
            console.log('o valor 1 corresponde a Janeiro')
                break;

        case 2: "fevereiro" 
            console.log('o valor 2 corresponde a Fevereiro')
                break;

        case 3: "marco"
            console.log("o valor 3 corresponde a março")
                break
        
        case 4: "abril"
            console.log("o valor 4 corresponde a abril")
                break

        case 5: "maio"
            console.log("o valor 5 corresponde a maio")
                break

        case 6: "junho"
            console.log("o valor 6 corresponde a junho")
                break

        case 7: "julho"
            console.log("o valor 7 corresponde a julho")
                break

        case 8: "agosto"
            console.log("o valor 8 corresponde a agosto")
                break

        case 9: "setembro"
            console.log("o valor 9 corresponde a setembro")
                break

        case 10: "outubro"
            console.log("o valor 10 corresponde a outubro")
                break

        case 11: "novembro"
            console.log("o valor 11 corresponde a novembro")
                break

        case 12: "dezembro"
            console.log("o valor 12 corresponde a dezembro")
                break

        default:
            console.log("valor inexistente, tente outro...")
    }
}
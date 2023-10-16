import * as leitor from "readline-sync"

let userTransporte: string

while(true){
    userTransporte = leitor.question("digite um meio de transporte: carro, bicicleta ou bicicleta")

    switch (userTransporte){
        
        case "carro": 
            console.log("de carro voce pode andar até 220km/h")
                break

        case "bicicleta":
            console.log("de bicicleta voce pode andar ate 20km/h")
                break

        case "moto":
            console.log("de moto voce pode andar ate 180km/h")

        default: 
            console.log("Não reconheço este veiculo, tente novamente.")

    }
}

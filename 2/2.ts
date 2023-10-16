import * as leitor from "readline-sync"

let corUser: string

while(true){
   corUser = leitor.questionInt("digite uma cor:");
    
   switch (corUser){
 
    case "amarelo": 
    console.log('Amarelo me lembra o brilho do sol');
        break

        case "verde": 
        console.log('Verde me lembra a natureza na primavera');
            break

            case "azul": 
            console.log('Azul me lembra o oceano');
                break

            default:
                console.log('Essa cor não me lembra nada.');
                    
   }
}
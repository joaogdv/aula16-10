"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var userNum;
while (true) {
    userNum = leitor.questionInt("digite um numero de 1 a 5 e receba uma mensagem");
    switch (userNum) {
        case 1:
            console.log("Um passo de cada vez.");
            break;
        case 2:
            console.log("Em busca da felicidade.");
            break;
        case 3:
            console.log("Fique em pé mesmo quando derrubado.");
            break;
        case 4:
            console.log("Nada é impossível.");
            break;
        case 5:
            console.log("A jornada é mais importante que o destino.");
            break;
        default:
            console.log("tente outro numero...");
    }
}

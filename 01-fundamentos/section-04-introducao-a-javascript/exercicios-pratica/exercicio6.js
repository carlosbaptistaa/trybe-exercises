//Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let pecaXadrez = "Bispo".toLowerCase();

switch (pecaXadrez) {

    case "bispo":
        console.log("Ande pela diagonal");
        break;
        
    case "peao":
        console.log("Ande 1 para frente");
        break;
    
    case "rainha":
        console.log("Ande pela diagonal, frente, costas ou lados");
        break;

    case "torre":
        console.log("Ande pela frente, costas ou lados ");
        break;

    default: 
    console.log("Peça inválida!!!");
}

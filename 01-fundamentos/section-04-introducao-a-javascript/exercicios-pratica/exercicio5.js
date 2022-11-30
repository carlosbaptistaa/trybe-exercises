//Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”

const angulo1 = 20;
const angulo2 = 80;
const angulo3 = 80;

let somaAngulos = 180;

if (angulo1 + angulo2 + angulo3 == somaAngulos) {
    console.log("Este resultado é: " + true);
}
else if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0){
    console.log("Um ângulo precisa ter valor positivo!!!");
}
else {
    console.log("Erro, a soma dos ângulos tem que ser = 180°");
}


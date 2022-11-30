// Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A Porcentagem >= 80 -> B Porcentagem >= 70 -> C Porcentagem >= 60 -> D Porcentagem >= 50 -> E Porcentagem < 50 -> F
// O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

const nota = -6;

if (nota >= 90 && nota <=100){
console.log("Seu conceito é o A");
}
else if (nota >= 80 && nota < 90){
console.log("Seu conceito é o B");
}
else if (nota >= 70 && nota < 80){
console.log("Seu conceito é o C");
}
else if (nota >= 60 && nota < 70){
console.log("Seu conceito é o D");
}
else if (nota >= 50 && nota <= 60){
console.log("Seu conceito é o E");
}
else if (nota < 50 && nota >= 0){
console.log("Seu conceito é o F");
}
else {
    console.log("Nota inválida!!!");
}

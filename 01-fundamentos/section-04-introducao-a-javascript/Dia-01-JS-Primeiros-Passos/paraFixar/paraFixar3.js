const nota = 81;

if (nota >= 80) {
    console.log("Parabéns, você foi aprovado(a)!!!");
}
else if (nota < 80 && nota >= 60) {
    console.log("Você está na nossa lista de espera.");
}
else if (nota < 60) {
    console.log("Você foi reprovado(a)!!!");
}
else {
    console.log("Nota Inválida");
}
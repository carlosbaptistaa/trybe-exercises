let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

console.log(numbers);

for (let index = 0; index < numbers.length; index += 1) {
  result += numbers[index];
}

console.log("A soma dos índices é: " + result);
console.log("A média dos índices é: " + (result/numbers.length));

if ((result/numbers.length) > 20) {
  console.log("Valor maior que 20");
} else {
  console.log("Valor menor que 20");
}



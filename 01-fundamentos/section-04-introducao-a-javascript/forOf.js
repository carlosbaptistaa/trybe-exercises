let numeros = [1,2,3,4,5,6];
for(let numero of numeros) {
  console.log(numero);
}

//iteração dos valores da propriedade numeros, jogando em numero.

let word = 'Carlos';
for (let letter of word) {
  console.log(letter);
}
//iteração dos valores da string word e jogando em letter.

let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}
//iteração dos valores do number arrOfNumbers e somando um valor a cada elemento do array.
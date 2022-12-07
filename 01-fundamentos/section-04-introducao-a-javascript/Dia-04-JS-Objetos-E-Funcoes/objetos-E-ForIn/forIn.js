let pizzas = {
    sabor: "Palmito",
    preco: 39.90,
    bordaCatupiry: true
};

for (let chaves in pizzas){
    console.log(pizzas[chaves]);
}

let pizzasDoces = ['Chocolate', 'banana', 'morango'];
for (let chaves in pizzasDoces){
    console.log(chaves, pizzasDoces[chaves]);
}
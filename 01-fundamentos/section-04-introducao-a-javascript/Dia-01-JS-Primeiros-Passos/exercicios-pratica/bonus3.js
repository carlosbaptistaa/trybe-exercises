//Utilize if/else para escrever um código que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda, descontado o custo do produto) a empresa terá ao vender mil desses produtos.

//Atente que, sobre o custo do produto, incide um imposto de 20%.

//Seu código também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

//O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.

//valorCustoTotal = valorCusto + impostoSobreOCusto;
//lucro = valorVenda - valorCustoTotal (lucro de um produto);

const custoProduto = 50;
const valorVenda = 82;
const imposto = 0.2;

let lucro =  (valorVenda - (custoProduto - (custoProduto * imposto))) * 1000;

if (valorVenda < 0 || custoProduto < 0){
    console.log("Número inválido!!!")
} else{
    console.log("O lucro foi de R$ " + lucro)
}


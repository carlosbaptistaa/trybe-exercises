//Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: ‘Tio Patinhas’, ‘Christmas on Bear Mountain, Dell’s Four Color Comics #178’, ‘O último MacPatinhas’, ‘Sim’. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves. Valor esperado no console:

let info = {

    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
};

let info2 = {

    personagem: 'Margarida, Tio Patinhas',
    origem: 'Pato Donald, Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald, O último MacPatinhas',
    recorrente: 'Sim',
};  

for (let propriedade in info) {
    if (
        propriedade === 'recorrente' &&
        info[propriedade] === 'Sim' &&
        info2[propriedade] === 'Sim'
    ) {
    console.log('Ambos Recorrentes');
    } else {
    console.log(info[propriedade] + ' e ' + info2[propriedade]);
  }
}
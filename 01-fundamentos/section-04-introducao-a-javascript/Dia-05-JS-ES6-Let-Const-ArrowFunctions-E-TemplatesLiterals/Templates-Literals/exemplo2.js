let pessoa = {
    nome: 'Carlos',
    sobrenome: 'Baptista',
    anoNascimento: 1999
}

console.log(`Olá ${pessoa.nome} ${pessoa.sobrenome}, 
Ano de nascimento: ${pessoa.anoNascimento},
Idade em 2023: ${2023 - pessoa.anoNascimento} anos.`);
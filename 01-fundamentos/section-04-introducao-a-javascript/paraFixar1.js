let player = {
    name: 'Carlos ',
    lastName: 'Baptista',
    age: 23,
    medals: { golden: 2, silver: 3 },
}
console.log('O jogador ' + player.name + player.lastName + ' possui ' + player.age + ' anos de idade.' );

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

console.log('O jogador ' + player['name'] + '' + player['lastName'] + ' foi eleito o melhor do mundo ' + player['bestInTheWorld'].length + ' vezes.');

console.log('O jogador ' + player['name'] + '' + player['lastName'] + ' possui ' + player['medals']['golden'] + ' medalhas de ouro ' + 'e ' + player['medals']['silver'] + ' medalhas de prata.');
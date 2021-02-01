'use strict';

// destructuring é desestruturação do objeto.
// não é a destruição do objeto

const restaurant = {
  nameR: 'Restaurante Chuchu Classico Italiano',
  locationX: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  meuArray: {
    itemUm: {
      nome: 'Viviane',
      profissao: 'engenheira da Nasa',
    },
    itemDois: 'Vivão',
    profissao: 'Também é engenheira da Nasa',
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
    sun: {
      open: 14, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex, catIndex) {
    return [
      this.starterMenu[starterIndex],
      this.mainMenu[mainIndex],
      this.categories[catIndex],
    ];
  },
  // // Primeiro modo, recebendo o objeto completo
  // orderDelivery: function (obj) {
  //   console.log(obj);
  // },

  // // Segundo modo, fazendo o destructuring propriamente
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time} `
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your pasta with ${ing1}, ${ing2},${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// console.table(restaurant);

// // // #################### Destructuring Objects ####################
// // // #################### Destructuring Objects ####################

// // Para fazer o destructuring de objetos é necessário usar
// // curly braces {} porque esse é o modo como objetos são criados / declarados

// // 1) Para fazer o destructuring de objetos basta declarar qual propriedade
// // será enviada para o objeto a ser criado
// // Lembre que objetos não tem ordem, então não é necessário
// // indicar o índice, mas o nome da propriedade que se deseja copiar.
// // O nome da variável deve ser igual ao da variável, do contrário, retorna erro
// const { nameR, openingHours, categories } = restaurant;
// console.log(nameR, openingHours, categories);

// // 2) Se quisermos que a variável criada tenha nome diferente da propriedade
// // Ainda é necessário dar o nome da propriedade que será copiada,
// // mas basta usar :novoNome
// const { nameR: novoNome, openingHours: novoOpening } = restaurant;
// console.log(novoNome, novoOpening);

// // 3) Valores Default
// // é possível declarar valores default para propriedades que não se sabe
// // se são preenchidas ou não.
// // Também é possível dar um novo nome para propriedade E fornecer um valor padrão
// // no exemplo abaixo, a propriedade menu não existe, então retornará o valor default definido
// // sem isso, retornaria um valor undefined
// const { menu = [], starterMenu: startes = [] } = restaurant;
// console.log(menu, startes);

// // 4) Mutating variables (trocar valores sem usar variável intermediária)
// // Para objetos é um pouco diferente de arrays, que é só fazer a declaração e atribuição
// // Para fazer a troca é necessário fazer o wrap da atribuiçao,
// // caso contrário retorna erro.
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // 5) Objetos aninhados em objetos
// // é necessário declarar a atribuição diretamente para a
// // propriedade (o objeto aninhado) que se vai copiar
// // se preferir, não precisa indicar o objeto maior.. o que está aninhando o que vc quer
// // vc pode declarar só para o código ficar mais legível
// const {
//   sat: { open: o, close: c },
// } = restaurant.openingHours;
// console.log(o, c);

// const {
//   itemUm: { nome: nomeDaPrincesa, profissao: profissaoDaPrincesa },
// } = restaurant.meuArray;
// console.log(`${nomeDaPrincesa} é ${profissaoDaPrincesa} 😎`);

// // 6) Declarar um método que retorna um objeto com várias informações
// // O método foi declarado no objeto lá em cima
// // essa técnica é amplamente usada em js
// // especialmente em bibliotecas de terceiros
// // Importante notar que o método suporta um objeto.
// // Não se trata de quatro argumentos, mas eles especificados, sendo de um mesmo objeto
// // É realmente apenas UM objeto
// // Assim que o objeto é recebido, é imediatamente feito o destructuring de
// // seus valores
// restaurant.orderDelivery({
//   time: '22h30',
//   address: 'Rua do Sol',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// 6.1) Para o destructuring do item 6 também é possível
// atribuir valores padrão para as propriedades

// // #################### Destructuring Arrays ####################
// // #################### Destructuring Arrays ####################

// // 1) Destructuring de um array a partir do objeto restaurante.categories
// // como trata-se de um array, é possivel pular um elemento
// // para pular o elemento é só usar uma virula e não declarar nada:
// let [mainCat, , secondCat, thirdCat] = restaurant.categories;
// console.log(mainCat, secondCat, thirdCat);

// // 2) trocar as variáveis sem usar variável intermediária
// // é possível fazer a reatribuição inclusive com mais do que apenas duas variáveis
// [thirdCat, mainCat, secondCat] = [secondCat, mainCat];
// console.log(`Main, secondary alteradas: `, mainCat, secondCat);

// // 3) função que retorna um array
// // criar o método no objeto, indicando qual propriedade será usada
// // para a atribuição de valores.
// // veja o método order
// // é possível fazer esse destructuring com diversas propriedades
// // se vc não passar o índice, o método vai retornar todo o array da da propriedade
// console.log(restaurant.order(2, 0, 3));

// // 4) Array aninhado
// const nested = [2, 4, [5, 6, 9]];

// // 4.1) pegar um item único e um array aninhado
// // o j nesse caso vai receber como valor o array aninhado
// const [i, , j] = nested;
// console.log(i, j);

// // 4.2) pegar itens antes do array aninhado
// // E os itens do array aninhado como elementos separados
// // nesse caso, declara no destructuring o array
// // assim é possível para nomear cada variável
// // se não quiser algum elemento, basta pular na declaração
// const [x, , [z, w, v]] = nested;
// console.log(x, z, w, v);

// // 5) Definir valores padrão para
// // Quando vc não conhece o array que vai receber
// // Isso é bem comum no dia a dia
// // O valor default é definido já na declaração da variável

// // ##### ENVIAR NO Q&A
// // a parte que fiquei em dúvida é se recebermos apenas um valor
// // como faz para ele ser atribuído para a variável que não tem
// // valor default definido?
// const [p = 1, q, r = 1] = [9];
// console.log(p, q, r);

// code challenge

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels', 'Lewandowski'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (playerIndex) {
    let goals = 0;
    for (let i = 0; i < this.scored.length; i++) {
      if (this.scored[i] === this.scored[playerIndex]) {
        goals++;
      }
    }
    return goals;
  },
};

console.log(game.printGoals(0));
// 1
const [players1] = game.players;
const [[], players2] = game.players;

console.log(`players1`, players1);
console.log(`players2`, players2);

// 2
const [[gk1, ...fieldPlayers1], [gk2, ...fieldPlayers2]] = game.players;
console.log(gk1, fieldPlayers1);
console.log(gk2, fieldPlayers2);

// 3
const [...allPlayers] = game.players;
console.log(`Todos os jogadores: `, allPlayers);

// 4
const [
  players1Final,
  ,
  sub1 = 'Thiago',
  sub2 = `Coutinho`,
  sub3 = 'Perisic',
] = game.players;
console.log(`TODOS + sub:`, players1Final, sub1, sub2, sub3);

// 5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

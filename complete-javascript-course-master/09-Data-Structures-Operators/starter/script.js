'use strict';

// destructuring é desestruturação do objeto.
// não é a destruição do objeto
// destructuring é um recurso muito usado
const restaurant = {
  nameR: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

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
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered at ${address} at ${time}`
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

console.table(restaurant);

// 1) Destructuring de um array a partir do objeto restaurante.categories
// como trata-se de um array, é possivel pular um elemento
// para pular o elemento é só usar uma virula e não declarar nada:
let [mainCat, , secondCat, thirdCat] = restaurant.categories;
console.log(mainCat, secondCat, thirdCat);

// 2) trocar as variáveis sem usar variável intermediária
// é possível fazer a reatribuição inclusive com mais do que apenas duas variáveis
[thirdCat, mainCat, secondCat] = [secondCat, mainCat];
console.log(`Main, secondary alteradas: `, mainCat, secondCat);

// 3) função que retorna um array
// criar o método no objeto, indicando qual propriedade será usada
// para a atribuição de valores.
// veja o método order
// é possível fazer esse destructuring com diversas propriedades
// se vc não passar o índice, o método vai retornar todo o array da da propriedade
console.log(restaurant.order(2, 0, 3));

// 4) Array aninhado
const nested = [2, 4, [5, 6, 9]];

// 4.1) pegar um item único e um array aninhado
// o j nesse caso vai receber como valor o array aninhado
const [i, , j] = nested;
console.log(i, j);

// 4.2) pegar itens antes do array aninhado
// E os itens do array aninhado como elementos separados
// nesse caso, declara no destructuring o array
// assim é possível para nomear cada variável
// se não quiser algum elemento, basta pular na declaração
const [x, , [z, w, v]] = nested;
console.log(x, z, w, v);

// 5) Definir valores padrão para
// Quando vc não conhece o array que vai receber
// Isso é bem comum no dia a dia
// O valor default é definido já na declaração da variável

// ##### ENVIAR NO Q&A
// a parte que fiquei em dúvida é se recebermos apenas um valor
// como faz para ele ser atribuído para a variável que não tem
// valor default definido?
const [p = 1, q, r = 1] = [9];
console.log(p, q, r);

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
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

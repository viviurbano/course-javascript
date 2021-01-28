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
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
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
const arr = [1, 2, 3, 4, 5];
const [x, y, z] = arr;
console.log(x, y, z);

const [first, , third, fourth] = restaurant.categories;
console.log(first, third, fourth);

let [main, secondary] = restaurant.categories;
let [mainStartMenu, secondStartMenu, , fouthStartMenu] = restaurant.starterMenu;

[secondStartMenu, mainStartMenu, fouthStartMenu] = [
  mainStartMenu,
  secondStartMenu,
  fouthStartMenu,
];
console.log(mainStartMenu, secondStartMenu, fouthStartMenu);

// && and ||
// podem ser usados para retornar qualquer tipo de dado, não apenas para boolean
// têm uma propriedade chamada 'short circuiting'
// short circuiting -> significa que se o primeiro valor fornecido for verdadeiro,
//então esse valor será retornado. O js não vai nem olhar para o segundo valor

// console.log(`----- OR -------`);
// console.log(3 || 'Vivi');
// console.log('Vivi' || 3);
// console.log('' || 'Vivi');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(`----- AND -------`);
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza(`mushroom`, 'spinach');
//}

// let x = restaurant.orderPizza && restaurant.orderPizza(`mushroom`, 'spinach');
// console.log(`X: `, x);

// // Operador de coalescência nula
// restaurant.numGuests = 0;

// const guests1 = restaurant.numGuests || 10;
// console.log(`guests: `, guests1);

// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(`guests correct: `, guestCorrect);

// restaurant;
// // como a propriedade restaurant.numGuests não existe e portanto não é válida
// // o operador ternário abaixo vai retornar 10, que é um valor válido
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// let arr = [7, 8, 9];
// const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArray);

// const newArry = [1, 2, ...arr];
// console.log(newArry);

// console.log(...newArry);
// // aqui é uma cópia completa do menu original e a inclusão do gnocci no mainMenu
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];

// console.log(newMenu);

// // copy array
// const mainManuCopy = [...restaurant.mainMenu];

// //Join 2 arrays or mor main manu and starter manu
// const joinedMenus = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(`Menu juntos: `, joinedMenus);

// //Iterables: arrays, strings, maps, sets. ## objeto não é iterable!!!
// const str = 'Viviane';
// const letters = [...str, ' ', 's.'];
// console.log(letters);

// // real-world example
// const ingredientes = [
//   // prompt('Lets make pasta! Ingrediente 1? '),
//   // prompt('Lets make pasta! Ingrediente 2? '),
//   // prompt('Lets make pasta! Ingrediente 3? '),
// ];
// console.log(ingredientes);
// restaurant.orderPasta(...ingredientes);

// // desde do ES2018, o spread operator funciona também em objetos
// // Object
// const newRestaurant = { foundedin: '1998', ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.nameR = 'Ristorante Roma';

// console.log(restaurantCopy);
// console.log(restaurant);

// 1) Destructuring
// SPREAD because on right side of =
// const arr = [1, 2, ...[3, 4]];

//REST, because on LEFT side of =
// const [...others] = [1, 2, 3, 4, 5];
// console.log(others);

// //Array
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log('Array: ', pizza, risotto, otherFood);

// // Objetos
// const { fri, ...otherDays } = restaurant.openingHours;
// console.log('Other Days', otherDays);
// console.log('Thursday : ', fri);

// // 2) Funções ###
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//     console.log('Funcão adição: ', sum);
//   }
// };

// add(1, 2, 3, 4, 5);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('queijo', 'queijo', 'ovo', 'presunto', 'spinach');
// restaurant.orderPizza('queijo');

// let xx = ['Viviane'];
// let bb = ['xx'];
// //pega cada um dos elementos para inserir no novo array
// let newArrr = [...xx, ...bb];
// console.log(newArrr);
// console.log('####');

//copia o array propriamente e faz uma cópia para o novo array
// let newArrr2 = [xx, bb];
// console.log(newArrr2);
// console.log(newArrr2);
//junta o array
// console.log(...xx, ...bb);
// console.log(xx, bb);

// restaurant.orderDelivery({
//   time: '22h30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// });

// const { nameR, openingHours, categories } = restaurant;
// // console.log(nameR, openingHours, categories);

// // definindo um objeto baseado em um original, mas alterando o nome das propriedades
// const {
//   nameR: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(`aqui 👇`);
// console.log(nameR, openingHours, categories);

// // esse modo de trabalhar com objeto é especialmente útil porque muitas vezes os dados são provenientes de API
// // então não temos a etrutura correta do objeto
// // é importante, então, definir esses defaults para leitura de dados

// // ### Default variables
// const { menu = [], starterMenu: starters = [] } = restaurant;

// console.log(`aqui 👇`);
// console.log(menu, starters);

// const { location: meuMenu = [], starterMenu: meuStarters = [] } = restaurant;
// console.log(`aqui 👇`);
// console.log(meuMenu, meuStarters);

// // ### Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// //wrap your elements para conseguir fazer o destructuring
// ({ a, b } = obj);
// console.log(a, b);

// // destructuring de objetos dentro de objetos
// // nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// console.table(restaurant);
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;

// console.log(a, b, c);
// console.log(`####`);
// console.log(x, y, z);

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//essa é a mesma maneira de fazer o código de cima, mas sem a variável temp
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // mais um jeito, mas usando método

// console.log(restaurant.order(2, 0));

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];

// const [i, , j] = nested;
// console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // default values
// const [p, q, r] = [8, 9];
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
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

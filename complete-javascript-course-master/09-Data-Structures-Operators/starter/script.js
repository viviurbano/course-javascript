'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
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
  },
};

//destructuring arrays
const arr = ['Alho', 'marguerita', 'portuguesa'];
let [first, second] = arr;
console.log(first, second);
[first, second] = [second, first];
console.log(first, second);

const newArr = [1, 2, 3];
const mainMenuCopy = [restaurant.mainMenu, newArr];

console.log(mainMenuCopy);
console.log(`==========`);
console.log(...mainMenuCopy);

// let firstName = 'Isso é um objeto iteravel';
// const meuNome = [...firstName];
// console.log(`==========`);
// console.log(typeof meuNome, ...meuNome);
// console.log(typeof meuNome, meuNome);

// console.log(typeof restaurant.openingHours, ...restaurant.openingHours);

// const newRestaurant = { foundedIn: 1988, ...restaurant, founder: 'Viviane' };
// console.log(newRestaurant);
// console.log(`==========`);
// const newRestaurant2 = { foundedIn: 1988, restaurant, founder: 'Viviane' };
// console.log(newRestaurant2);

// const [...rest] = [1, 2, 3, 4, 5];
// console.log(rest);

// const [a, b, ...test] = rest;
// console.log(a, b, test);

// // const { fri, ...weekdays } = restaurant.openingHours;
// // console.log(fri, weekdays);

// const arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 98, 99];
// for (const elem of arr2) {
//   console.log(elem);
//   console.log(typeof elem);
// }

// let x = 3;
// let y = 5;
// const myArrowFunc = () => a + b;
// console.log(myArrowFunc());

// const myArrowFunc2 = (x, y) => x + y;

const properties = Object.keys(restaurant.openingHours);
const values = Object.values(restaurant.openingHours);
console.log(typeof properties);
console.log(typeof values);

const entries = Object.entries(restaurant);
console.log(entries);

console.log(new Set('vivianeurbanoaearaujo'));

const staff = ['Waiter', 'Manager', 'Waiter', 'Chef', 'Manager'];
// transformar um set em array - crie um array e 'desempacota usando o destructuring

const staffUnique = [...new Set(staff)];
console.log(staffUnique);

const passenger = 'vIviaNe';

const passengerCorrect =
  passenger[0].toUpperCase() + passenger.slice(1).toLowerCase();
console.log(passenger[0].toUpperCase() + passenger.slice(1).toLowerCase());

const announcement = 'All passenger come to boarding door 23. Boarding door 23';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

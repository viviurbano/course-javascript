'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');

  const output = `${type.startsWith(
    'Delayed' ? '🔴' : ''
  )} from ${from} to ${getCode(to)} (${time.replace(':', 'h')})`;
  console.log(output.replace('_', ''));
}

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

const nested = [1, 33, 3, [4, 5]];
const [a, b, , [d, e]] = nested;
// console.log(a, b, d, e);

// for (const item of nested) {
//   console.log('item', item);
// }

const mySet = ['a', 'a', 'b', 'c', 'c', 'vinho'];
// for (const el of mySet) console.log(el);

const question = new Map([
  ['question', 'What is the best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [(3, 'Javascript')],
  [('correct', 3)],
]);

// console.log(question);

const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 10 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  // console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', '3');

// console.log(bookings);

const wave = function () {
  console.log('oi 👋');
};

document.body.addEventListener('click', wave);

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetArr = greeting => {
  return name => {
    console.log(`${greeting} ${name}`);
  };
};

const greetHey = greet('Hey');
const greetHeyArr = greetArr('Hey Arrow');

greetHey('Jonas');
greetHeyArr('Vivi');

console.log(restaurant);
console.log('-----');
const values = Object.values(restaurant);
const entries = Object.entries(restaurant);
console.log('-----');

console.log(typeof values);

console.log('-----');
console.log(typeof values);

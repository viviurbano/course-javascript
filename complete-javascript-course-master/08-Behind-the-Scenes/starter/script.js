'use strict';

// const name = 'Vivi';
// const first = () => {
//   let a = 1;
//   const b = second(7, 9);
//   a = a + b;
//   return a;
// };
// function second(x, y) {
//   var c = 2;
//   return c;
// }

// const x = first();

// console.log('resultado: ' + x);

// const a = 'Vivi';
// // const b = '';
// // const c = '';
// first();

// function first() {
//   const b = 'Hello ';
//   second();

//   function second() {
//     const c = 'Hi ,';
//     third();
//   }
// }

// function third() {
//   const d = 'Hey ';
//   console.log(d + c + b + a);
// }

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `escopo printAge ${firstName}, you are ${age}, born in ${birthYear}`;

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const firstName = 'Viviane Urbano';
//       const str = `Oh, you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//       output = 'New Output #####';
//     }
//     console.log(output);
//   }

//   printAge();
//   return age;
// }
// const firstName = 'Vivi';
// console.log(calcAge(1991));

// console.log(`${me}`);
// console.log(`${job}`);
// console.log(`${year}`);
// var me = 'Viviane';
// let job = 'engenheira da Nasa';
// const year = 1988;

//functions
// console.log(`addDecl: `, addDecl(2, 4));
// console.log(`addExpr: `, addExpr(2, 4));
// console.log(`addArrow: `, addArrow(2, 4));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// console.log(numProducts);

// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log(`All products deleted`);
// }

// var xxxx = 1;
// var zzzzz = 1;
// let y = 2;
// const z = 3;

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1991);

// const vivi = {
//   year: 1988,
//   calcAge: function () {
//     console.log(this);
//     console.log(2021 - this.year);
//   },
// };
// // vivi.calcAge();

// const outro = {
//   year: 1988,
// };

// outro.calcAge = vivi.calcAge;
// outro.calcAge();

// const vivi = {
//   firstName: 'Viviane',
//   year: 1991,
//   calcAge: function () {
//     console.log(2037 - this.year);

// Solution 1
// const self = this;
// const isMilleninial = function () {
//   console.log(self);
//   console.log(self.year >= 1981 && self.year <= 1996);
// };

//     //Second solution
//     const isMilleninial = () => {
//       console.log(`hey`);
//       console.log(this);
//       console.log('resultado: ', this.year >= 1981 && this.year <= 1996);
//     };
//     isMilleninial();
//   },
//   // vai retornar undefined
//   greetArrow: () => console.log(`Hey, ${this.firstName}`),

//   greet: function () {
//     console.log(`Hey, ${this.firstName}`);
//   },
// };
// vivi.greetArrow();
// vivi.greet();
// vivi.calcAge();

// //Arguments keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 50);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// addArrow(80, 90);

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Vivi',
//   age: 30,
// };
// const friend = me;
// friend.age = 27;
// console.log(`Friend: `, friend);
// console.log(`Friend: `, me);

//primitive types
let lastName = 'Willians';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Willians',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
// console.log('Before marriage: ', jessica);
// console.log('After marriage: ', marriedJessica);

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Willians',
  age: 27,
  family: ['Alice', 'Bob'],
};

//para copiar um objetivo, mas conseguir alterar uma propriedade
//com isso o Objeto original é copiado e é criada uma nova variável, evitando conflito da cópia com a original
//importante destacar que se houver um outro Objeto dentro de um objeto, essa forma de copiar só vale para o primeiro nível, então o objeto interno será o original
//posteriormente vamos aprender a usar uma library externa que faz esse tipo de cópia 'profunda'
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'mudou para Davis';
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log('Before marriage: ', jessica2);
console.log('After marriage: ', jessicaCopy);

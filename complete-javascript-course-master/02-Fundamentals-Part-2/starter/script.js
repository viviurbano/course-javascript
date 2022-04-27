'use strict';
//
// function juiceProcessor(apples, oranges) {
//   // console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples, and ${oranges} oranges. Enjoy it! 🧃`;
//   return juice;
// }

// const juiceNumber = juiceProcessor(5, 1);
// console.log(juiceNumber);

// // function declaration
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// // store the result into a variable
// const age1 = calcAge1(1991);
// console.log(age1);

// // function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// // arrow function, that indeed is a special type of function expression

// const calcAge3 = birthYear => 2037 - birthYear;
// console.log(calcAge3(1988));

// const yearsUntilRetirement = (personName, birthYear) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   return `${personName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement("Viviane", 1988));

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function juiceProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   // console.log(apples, oranges);
//   const juice = `Juice with ${applePieces} pieces of apple, and ${orangePieces} pices of orange. Enjoy it! 🧃`;
//   return juice;
// }

// const myJuice = juiceProcessor(2, 3);
// console.log(myJuice);

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement < 0) {
//     console.log(`Years retired: ${retirement}`);
//     return `already retired`;
//   } else return retirement;
// };

// console.log(yearsUntilRetirement(1970));

// const friends = ["Peter", "Steven", "Mickael"];
// console.log(friends);

// const years = new Array(1991, 1894, 2008, 2020);
// console.log(years);

// friends.push("Jay");
// console.log(friends);

// const here = friends.push("Jay", "Fabio");
// console.log(friends);

/**
 * OBJECTS key-value pair
 */
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Silva",
//   ageProf: 2037 - 1991,
//   job: "teacher",
//   friends: ["Peter", "Steven", "Mickael"],
// };

// console.log(jonas);
// console.log(jonas.firstName);

// const profession = "Prof";
// console.log(jonas["age" + profession]);

// // const interestedIn = prompt("What would you like to know?");
// // if (jonas[interestedIn]) console.log(jonas[interestedIn]);
// // else console.log(`Try again`);

// // 2 formas de incluir dados no objeto, com dots ou brackets
// jonas.location = "Portugal";
// jonas["twitter"] = "@jonassilva";
// jonas["livroPreferido"] = "JS the good parts";
// console.log(jonas);

// const bestFriend = jonas.friends[0];
// console.log(bestFriend);

/**
 * OBJECTS key-value pair
 */

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Silva",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Peter", "Steven", "Mickael"],
//   hasDriversLicence: true,

// erro pq arrow function NÃO trabalha com this
// calcAge: () => 2037 - this.birthYear,

// PRIMEIRA FORMA DE CALCULAR
// calcAge: function (birthYear) {
//   return 2037 - birthYear;
// },

// SEGUNDA FORMA DE CALCULAR
// calcAge: function () {
//   return 2037 - this.birthYear;
// },

// TERCEIRA FORMA DE CALCULAR  ~~~e armazenar a propriedade
//   calcAge: function () {
//     return 2037 - this.birthYear;
//   },
//   calcAge2: function () {
//     // se não explicatar o retorno, a resposta será UNDEFINED
//     return (this.age = 2037 - this.birthYear);
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.job}, with ${this.calcAge2()}`;
//   },
// };

// console.log(jonas.getSummary());

// for (let rep = 0; rep < 10; rep++) {
//   console.log(`linha número ${rep}`);
// }

// const jonas = [
//   'Jonas',
//   'Silva',
//   2037 - 1991,
//   'teacher',
//   ['Mike', 'Josh', 'Ana'],
//   true,
// ];

// for (let i = 0; i < jonas.length; i++) {
//   console.log(jonas[i]);
// }

// const years = [1991, 2007, 1969, 2020, 2036];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }

// console.log(ages);

// BACKWARDS
// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(jonas[i]);
// }

// loop inside a loop - gym example
// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`####### Starting exercise ${exercise}`);
//   // aqui começa outro exercicio
//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`--------- Lifgting weight exercise ${rep}`);
//   }
// }

// --------- ????
// function randInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// function sample(items, n) {
//   let result = [];
//   items.forEach((item, i) => {
//     if (i < n) {
//       result.push(item);
//     } else {
//       let j = randInt(0, i);
//       if (j < n) {
//         result[j] = item;
//       }
//     }
//   });
//   return result;
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`While: lifting repetition ${rep}`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) {
//   console.log(`Rolled dice: ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) {
//     console.log(`The dice is ${dice} -- loop is about to finish`);
//   }
// }

const jonas = {
  firstName: 'Jonas',
  lastName: 'Silva',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Peter', 'Steven', 'Mickael'],
  hasDriversLicence: false,
  calcAge: function (birthYear) {
    this.age = 2037 - birthYear;
    return this.age;
  },
};

console.log(
  `${jonas.firstName} is a ${jonas.age}-year old, ${jonas.job}, and he ${
    jonas.hasDriversLicence ? 'has' : 'has no'
  } driver's license`
);

'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName);

  return age;
}

const firstName = 'Jonas';
calcAge(1991);

const age1 = function (year) {
  const year2 = year;
  console.log(year);
  console.log(arguments);
  console.log(this.year2);
};
age1(1, 2, 3);

// function age2(year) {
//   const year2 = year;
//   console.log(year);
//   console.log(arguments);
//   console.log(this.year2);
// }
// age2(9, 8, 7);

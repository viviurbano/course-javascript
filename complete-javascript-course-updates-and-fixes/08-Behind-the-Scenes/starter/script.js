'use strict';
// const numbers = [1, 2, 3, 4, 5, 6, 7];

// const newArr = [];
// console.log(newArr);
// console.log('----');

// numbers.forEach(el => {
//   newArr.push(el * 2);
// });

// console.log(newArr);

const nested = [1, 2, 3, [4, 5]];
const [a, b, , [d, e]] = nested;
// console.log(a, b, d, e);

for (const item of nested) {
  console.log('item', item);
}

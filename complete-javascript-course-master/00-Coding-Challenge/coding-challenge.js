/**
 * First code challenge
 */
// const markWeight = 78;
// const markTall = 1.69;

// const johnWeight = 92;
// const johnTall = 1.95;

// const markBMI = markWeight / markTall ** 2;
// console.log(markBMI);

// const johnBMI = johnWeight / johnTall ** 2;
// console.log(johnBMI);

// if (markBMI > johnBMI) {
//   console.log(`Mark has more mass than John`);
// } else {
//   console.log(`John has more mass than Mark`);
// }

/**
 * Second code challenge
 */
// const avgScoresDolphins = (96 + 108 + 89) / 3;
// const avgScoresKoalas = (88 + 91 + 110) / 3;

// if (avgScoresDolphins > 100 || avgScoresKoalas > 100) {
//   if (avgScoresDolphins > avgScoresKoalas) {
//     console.log(`Dolphis won. Their avarege is ${avgScoresDolphins}`);
//   } else console.log(`Koalas won. Their avarege is ${avgScoresKoalas}`);
// } else console.log(`--- Nobody won`);

/**
 * Thrid code challenge
 */
// bill = 430;
// const tip = bill > 50 && bill < 300 ? 0.15 : 0.2;
// console.log(tip);

// console.log(
//   `The bill was ${bill}, the tip was ${bill * tip}, and the total value ${
//     bill + bill * tip
//   }`
// );

/**
 * Forth code challenge
 */
// const calcAvg = (scr1, scr2, scr3) => (scr1 + scr2 + scr3) / 3;

// const avgScoreDolphins = calcAvg(44, 23, 71);
// const avgScoreKoalas = calcAvg(65, 54, 49);
// console.log(`Dolphins: ${avgScoreDolphins} | Koalas: ${avgScoreKoalas}`);

// function checkWinner(avgScoreDolphins, avgScoreKoalas) {
//   if (avgScoreDolphins >= avgScoreKoalas * 2) {
//     return `Dolphins win ${avgScoreDolphins} vs. ${avgScoreKoalas}`;
//   } else if (avgScoreKoalas >= avgScoreDolphins * 2) {
//     return `Koalas win ${avgScoreKoalas} vs. ${avgScoreDolphins}`;
//   } else return `no team wins...`;
// }

// console.log(checkWinner(avgScoreDolphins, avgScoreKoalas));

/**
 * Fifth code challenge
 */
// const bill = 100;
// const calcTip = bill => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
// console.log(bills, tips, totals);

/**
 * Sixth code challenge
 */
// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     return (this.bmi = this.mass / this.height ** 2);
//   },
// };

// if (mark.calcBMI() > john.calcBMI()) {
//   console.log(
//     `${mark.fullName} ${mark.lastName} BMI: ${mark.calcBMI()} is higher than ${
//       john.fullName
//     } BMI: ${john.calcBMI()}`
//   );
// }

/**
 * Seventh code challenge
 */

// const calcTip2 = bill => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  tips[i] = calcTip(bills[i]);
  totals[i] = tips[i] + bills[i];
}
console.log(bills, tips, totals);

const calcAvg = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

const arr = [3, 3, 6];
console.log(calcAvg(arr));
console.log(calcAvg(totals));
console.log(calcAvg(tips));

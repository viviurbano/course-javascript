// Remember, we're gonna use strict mode in all scripts now!
'use strict';
// BUG FIXME

const tempetratures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let min = temps[0];
  let max = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curtemp = temps[i];
    if (typeof curtemp !== 'number') continue;

    if (curtemp > max) max = curtemp;
    if (curtemp < min) min = curtemp;
  }
  return max - min;
};

// console.log(calcTempAmplitude(temps));

// console.log(`Diff= ${min - max}
// Min temp: ${min}
// Max temp ${max}`);

const printForecast = function (temps) {
  let str = '';
  for (let i = 0; i < temps.length; i++) {
    str = str + `... ${temps[i]} C in ${i + 1} days `;
  }
  return str;
};
console.log(printForecast([17, 9, 8]));

'use strict';
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (arr) {
  containerMovements.innerHTML = '';

  arr.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${balance}€`;
};

calcDisplayBalance(account1.movements);

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
// O Split retorna um array
// forEach não muda o array

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

createUsernames(accounts);

// labelSumIn.textContent = `${deposit}`;

const withdrawal = movements.filter(mov => mov < 0);

// acc ->accumularor. Serve justamente para acumular algum valor
const balance = movements.reduce((acc, cur) => acc + cur, 0);

// btnLogin.addEventListener('click', function (e) {
//   e.preventDefault();
//   currentAccount = accounts.find(
//     (acc = acc.username === inputLoginUsername.value)
//   );

//   if (currentAccount && currentAccount.pin === +inputLoginPin.value) {
//     console.log(currentAccount);
//   }
// });

const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}`;

  const outcomes = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest}`;
};

calcDisplaySummary(account1.movements);

/**
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////
// arrays têm métodos
// Lembre-se que métodos são funções que podemos chamar em objetos
// Isso significa que são funções anexadas em objetos
// Então, se há métodos em arrays, isso significa que o próprio array é também um objeto
// Como arrays também são objetos, eles têm accesso a 'special build in methods' que funcionam como ferramentas para os arrays

// let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

// // o slice funciona um pouco diferente aqui. Ele retorna todo o restante do array a partir do índice indicado como parâmetro
// console.log(arr.slice(2));

// // se quiser, pode indicar o início e o fim
// console.log(arr.slice(2, 4));

// //last element
// console.log(arr.slice(-1));

// // SPLICE - Funciona de modo similar ao slice, entretanto MODIFICA o array original
// console.log(arr.splice(5));

// console.log(arr.splice(2, 5));
// console.log(arr);

// // REVERSE - também modifica o array original, revertendo a ordem dos elementos
// let arr2 = ['b', 'd', 'e', 'f', 'a', 'c'];
// arr2.reverse();
// console.log(arr2);

// // CONCAT - não muda o array
// const letters = arr.concat(arr2);
// console.log(letters);

// console.log(arr);

// // JOIN - inclui caractere escolhido entre os elementos do array
// console.log(letters.join(' - '));

// // ForEach
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // // For of para relembrar
// // for (const movement of movements) {
// //   if (movement > 0) {
// //     console.log(`✅ You deposited ${movement}`);
// //   } else {
// //     console.log(`🅾️ You withdrew ${Math.abs(movement)}`);
// //   }
// // }

// movements.forEach(function (movement, index) {
//   if (movement > 0) {
//     console.log(`Moviment: ${index + 1} - ✅ You deposited ${movement}`);
//   } else {
//     console.log(
//       `Moviment: ${index + 1} - 🅾️ You withdrew ${Math.abs(movement)}`
//     );
//   }
// });

// // a diferença fundamental entre o forEach e o for of é que o forEach não pode ser interrompido. Não aceita break

// // const x = [1, 2, 3];
// // x.forEach(function (el) {
// //   el = el + 1;
// // });
// // console.log(x);

// // let arr = [1, 2, 3, 4];
// // let x = arr.forEach((val, index) => (arr[index] = val * val));
// // console.log(x);

// let arr = [1, 2, 3, 4];
// let x = arr.map(val => val * val);
// arr = x;
// console.log(arr);

// ForEach with maps and sets

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key) {
//   console.log(`${key.padStart(4)}: ${value.padEnd(10)}`);
// });

// // Set

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

// // console.log(currenciesUnique);
// currenciesUnique.forEach(function (value) {
//   console.log(`${value.padEnd(10)}`);
// });

// // um pouco mais sobre callback

// // 1º: É apresentado um alerta com o conteúdo “2”;
// // 2º: Após cinco segundos, o próximo alerta é exibido, com conteúdo “1”.

// setTimeout(() => alert('1'), 5000);
// alert('2');

// function callback(e) {
//   alert('Aconteceu um evento ' + e.type);
// }
// window.addEventListener('click', callback);

// let salarioBruto = 3000;
// let salarioLiquido;

// getSalario(salarioBruto, resultado => {
//   salarioLiquido = resultado;
//   console.log(`O salário liquido é ${salarioLiquido}`);
// });

// function getSalario(salarioBruto, callback) {
//   let liquido = 0;
//   const inss = salarioBruto * 0.11;
//   const vr = salarioBruto * 0.05;
//   const vt = salarioBruto * 0.06;
//   const fgts = salarioBruto * 0.15;
//   const descontos = inss + vr + vt + fgts;
//   liquido = salarioBruto - descontos;

//   return callback(liquido);
// }

// function greeting(name, t) {
//   alert('Hello ' + name + t);
// }

// function processUserInput(callback) {
//   var name = prompt('Please enter your name.');
//   var texto = ' texto criado';
//   callback(name, texto);
// }

// processUserInput(greeting);

// const myF = callback => {
//   const val = 77;

//   callback(val);
// };

// myF(function (number) {
//   console.log(number);
// });

// const myOwnExample = callback => {
//   const name = '';
//   callback(name);
// };

// myOwnExample(function (name) {
//   name = prompt('insert your name');
//   console.log(`Your name is ${name}`);
// });

// myOwnExample(function (nome) {
//   nome = prompt('this is a test to understand how this works');
//   console.log(`Come from myOwnExample2 ${nome}`);
// });

// const arr = [11, 22, 33, 44, 55, 66];
// arr.forEach(function (el, index, todoArray) {
//   console.log(index + 1, el, todoArray);
// });
*/

// // Maximo value of array
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);
// console.log(max);

// const min = movements.reduce((acc, mov) => {
//   if (acc < mov) return acc;
//   else return mov;
// }, movements[0]);
// console.log(min);

// // De acordo com o prof, o reduce é o método mais poderoso que tem. E justamente por isso, também pode ser o mais difícil de lidar

// // Coding Challange #2

const juliaData1 = [3, 5, 2, 12, 7];
const juliaData2 = [9, 16, 6, 8, 3];

const kateData1 = [4, 1, 15, 8, 3];
const kateData2 = [10, 5, 6, 1, 4];

// let calcAvaregeHumanAge = function (ages) {
//1
// let humanAge = [];
// ages.forEach((dogAge, index) => {
//   if (dogAge <= 2) {
//     humanAge.push(dogAge * 2);
//     console.log(`${index}: ${humanAge}`);
//   } else if (dogAge > 2) {
//     humanAge.push(16 + dogAge * 4);
//     console.log(`${index}: ${humanAge}`);
//   }
// });
// console.log(`arr humanAge ${humanAge}`);

//   const humanAges = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
//   console.log(humanAges);

//   //2
//   const olderDogs = humanAges.filter(age => age >= 18);
//   console.log(`adult dogs ${olderDogs}`);

//   // //3
//   const avgAge =
//     olderDogs.reduce((acc, avgAge) => acc + avgAge, 0) / olderDogs.length;
//   return avgAge;
// };

// const withdrawal = movements.filter(mov => mov < 0);
// const avg1 = console.log(calcAvaregeHumanAge(testData));

// // Coding Challange #1
// const copyJuliaData1 = juliaData1.slice(1, 3);
// console.log(copyJuliaData1);
// const copyJuliaData2 = juliaData2.slice(1, 3);
// console.log(copyJuliaData2);

// const allDogs = [
//   ...copyJuliaData1,
//   ...copyJuliaData2,
//   ...kateData1,
//   ...kateData2,
// ];

// const checkDogs = function (arr) {
//   arr.forEach((age, index) => {
//     if (age < 3) {
//       console.log(
//         `Dog number ${index + 1} is still a puppy 🐶. He has only ${age}`
//       );
//     } else {
//       console.log(
//         `Dog number ${index + 1} is an adult 🦋. He already has ${age}`
//       );
//     }
//   });
// };

// checkDogs(allDogs);

// Métodos aplicados em arrays
// # Map - copia o array original, aplicando determinada função sobre cada um dos seus elementos.
// Retorna um novo array com os resultados da função aplicada a cada elemento

// # Filter - retorna um novo array apenas com os elementos que satisfazem à condição do filtro aplicado

// # Reduce - precisa de um acumulador que vai 'acumular' os valores do array e retornar o valor final de todos os elementos

// const movements = [5000, 3400, -150, -790, -3210, -1000, 8500, -30];
// const euroToUsd = 1.1;

// const movemntsUsd = movements.map(function (mov) {
//   return (mov * euroToUsd).toFixed(2);
// });

// const movemntsUsdArrow = movements.map(mov => (mov * euroToUsd).toFixed(2));

// const movementsDescriptions = movements.map((mov, i) => {
//   return `Movement ${i + 1}: You ${
//     mov > 0 ? 'deposited' : 'withdrew'
//   } ${Math.abs(mov)}`;
// });

// // console.log(movementsDescriptions);

// // assim como o forEach, o método map tem acesso a 3 parâmetros:
// // elemento, index e ao array completo
// const movementsDescriptionsTernary = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
// );
// console.log(movementsDescriptionsTernary);

// let person = {
//   age: 10,
//   checkAge: function () {
//     console.log(age);
//   },
// };

// let Person = function (initialAge) {
//   // Add some more code to run some checks on initialAge
//   if (initialAge > 0) this.age = initialAge;
//   else {
//     this.age = 0;
//     console.log('Age is not valid, setting age to 0.');
//   }
//   this.amIOld = function () {
//     // Do some computations in here and print out the correct statement to the console
//     if (this.age < 13) console.log('You are young.');
//     else if (this.age < 18) console.log('You are a teenager.');
//     else console.log('You are old.');
//   };
//   this.yearPasses = function () {
//     this.age++;
//   };
// };

// Person(10);

// const stringWords = `Tuesday, Thursday, cheque, in advance, annual fee, monthly membership, interest rate, tuition fees, poverty, bank statement, money management, current account, student account, low-risk investment, mortgage, grace period, budget deficit, retail voucher, coupon، counterfeit money, public money, taxpayers’ money, interest-free credit, partial refund, annuity, non-refundable, distribution costs, income, duty-free store, archaeology, course outline, handout, proofreading, student advisor, teamwork, assessment, lecture, tutor, attendance, give a talk, placement test, overseas students, facilities, college, commencement, leaflet, faculty, pupils, outcomes, extra background, compound, student retention, registrar’s office, stationery, leadership, questionnaire, survey,poll, profit margin, training, trainee, merchandise, keep-fit, salad bar, disease, meal, carbohydrates, rice, meat, seafood, yoghurt, green pepper, blackcurrant, egg yolk, liver, medicine treatment, remedy, nursing care, nursery, footbridge, forest, reef, lake, valley, hill, cliff, island, peninsula, earthquake, avalanche, tornado, typhoon, desertification, landslides, hurricane, pond, dam, canyon, greenhouse effect, burring fossil, exhaust fumes, deforestation, nitrogen oxide, smog, climate, pollution, temperature, power plants, landfill, cattle, wind turbine, soar power, hydroelectric power, soil conditioner, coal, fossil fuels, firewood, drought, contaminated, birds of prey, seabirds, poultry and game, mammals, cetacean,rodents, amphibian, octopus, phylum, genus, livestock, creature, lion, penguin, mushroom, leaves, seed, core, bark, trunk, twig, stem, fertilizer, Switzerland, the Philippines, Punjabi, Thai, Persian, Filipino, dome, log cabin, lighthouse, hut, skyscraper, semi-detached house, duplex, terraced house, town house, row house, bungalow, thatched cottage, mobile home, houseboat, block of flats, building, condominium, chimney, landlord, tenant, rent, lease, neighborhood, suburb, sofa, ground floor, hallway, embassy, road system,appointment, staff selection, workshop, unemployed, ability, vision, confidence, reasonable, spotted, striped, single double bedded room, surpass, hunt, persuade, ancient, necessary, exciting, fabulous, dull, immense, vast, salty, knowledgeable, confident, Western, tranquil, orienteering, caving, spelunking, archery, ice skating, scuba-diving, snorkeling, skateboarding, bowls, darts, golf, billiards, pottery, woodcarving, gardening, stamp collection, embroidery, climbing, cricket, baseball, basketball, rugby, soccer, American football, hockey, swimming, tennis, squash, badminton, field, court, pitch, the discus, the javelin, the hammer, the high jump, show jumping, polo, cycling, gymnasium, athlete, gym, extreme sports, paragliding, hang-gliding, skydiving, abseiling, snowboarding, bungee jumping, surfing, windsurfing, jet-skiing, bodyboarding, white-water rafting, kitesurfing, mountain biking, jogging, press-up, push-up, barbell, treadmill, canoeing, refreshment, Square, cylindrical, width, length, altitude, depth, breadth, height, cargo plane, shipment, container ship, boat, lifeboat, ferry, hovercraft, hydrofoil, liner, canal boat, narrowboat, dinghy sailing, sailboat, paddle steamer, cabin cruiser, rowing boat, rowboat, kayak, canoe, punt, gondola, seaplane, airship, hot-air balloon, hire a car, double-decker bus, single-decker, minibus, coach, truck, tanker, van, lorry, transporter, forklift truck, tow truck, breakdown truck, pickup, jeep, caravan, camper, tractor, tram, underground, subway, stream train, freight train, goods train, sticky, breeze, chilly, cold, cool, freezing, wet, weather forecast, antenna, moisture, cottage, parliament, canteen, bookshop, city council, dance studio, park, conversation club, kindergarten, helmet, cassette, silicon chip, gadget, device, breaks, mechanical pencil, disk, fur, metal, copper, rubber, wool, leather, lumber/wood, composite, wax, feather, craftsman, lecturer, office assistant, clerk, accountant, cashier, a gap year, fortnight, original inhabitant, indigenous, strike, carriage, personal fulfillment, recipient, ultrasound, pedestrian safety, traffic jams, driving license, literary, man-made, frequently updated, sewer systems, lunar calendar, libertarian, burger, life expectancy, fund-raising event, magnet, ramification, straight, farewell, welfare, illiteracy, robot, accomplishment,`;

// let newS = stringWords
//   .split(',')
//   .map(elem => elem.trim())
//   .join('\n')
//   .toLowerCase();

// // newS = newS.join('\n');
// console.log(newS);

// Chaining methods map filter reduce
// works like a pipeline
// const euroToUsd = 1.1;

// const totalDepositUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * euroToUsd)
//   .reduce((acc, mov) => acc + mov, 0)
//   .toFixed(2);

// console.log(totalDepositUSD);

// const totalDepositUSDDebug = movements
//   .filter(mov => mov > 0)
//   .map((mov, i, arr) => {
//     console.log(`array item ${i}: ${mov}`);
//     return mov * euroToUsd;
//   })
//   .reduce((acc, mov) => acc + mov, 0)
//   .toFixed(2);

// // Coding Challange #3
let calcAvaregeHumanAgeChain = ages =>
  ages
    .map(age => (age <= 2 ? age * 2 : 16 + age + 4))
    .filter(age => age > 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length);
// ages.map(age => (age <= 2 ? age * 2 : 16 + age + 4));

//     .reduce((acc, age, i, arr) => acc + age / arr.length); É nessa linha, no el `arr` que conseguimos o tamanho correto do array para cálculo

// console.log(calcAvaregeHumanAgeChain(juliaData1));

// Find method
// usar o Find é literalmente procurar algo em um array
// Facilita a busca em arrays que contém objetos de estrutura similar
// no array accounts, por exemplo, todos têm a propriedade `acc.owner`
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numbers.forEach((el, index) => console.log(`${el} x ${el} = ${el * index}`));

function processData(input) {
  //Enter your code here
  message = input.split('\n');

  var n = parseInt(message[0]);

  for (var x = 0; x < n; x++) {
    var m = message[x + 1];
    var l = m.length;
    var arr = m.split('');
    var ra = '';
    var rb = '';

    for (var y = 0; y < l; y++) {
      if (y % 2 == 0) ra = ra + arr[y];
      else rb = rb + arr[y];
    }
    console.log(ra + ' ' + rb);
  }
}

processData(`2222
palavr`);

// const humanAges = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4));

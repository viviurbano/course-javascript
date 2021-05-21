'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date) {
  // formato que queremos day/month/year
  const day = `${date.getDate()}`.padStart(2, 0); //incluir o zero à esquerda
  const month = `${date.getMonth() + 1}`.padStart(2, 0); // +1 pq os meses começam a contar em 0
  const year = date.getFullYear();

  const displayDate = (labelDate.textContent = `${day}/${month}/${year}`);

  const caldDaysPassed = (date1, date2) =>
    Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

// Mantendo um usuário logado - para não precisar logar sempre
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // data atual
    const now = new Date();
    const day = `${now.getDate()}`.padStart(2, 0); //incluir o zero à esquerda
    const month = `${now.getMonth() + 1}`.padStart(2, 0); // +1 pq os meses começam a contar em 0
    const year = now.getFullYear();
    const hour = now.getHours();
    const minute = now.getMinutes();
    labelDate.textContent = `${day}/${month}/${year}, ${hour}:${minute}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Math.floor(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);

    // Incluir data na transferecia
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = +inputLoanAmount.value;

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Incluir data na transação de empréstimo
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// // Number are always a float number
// console.log(23 === 23.0);

// // Stored as binary form
// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 === 0.3);

// /// Converstion
// console.log(Number('23'));
// // type coersion -reduz a conversão explicita
// console.log(+'23');

// // Parsing
// // para funcionar a string deve começar com número
// // o argumento 10 é para declarar que estamos no sistema decimal
// console.log(Number.parseInt('30px', 10));
// console.log(Number.parseInt('e23', 10));

// console.log(Number.parseInt(' 2.5rem'));
// console.log(Number.parseFloat('2.5rem'));

// // checar se é um NAN - not a number
// console.log(Number.isNaN(20));
// console.log(Number.isNaN('20'));
// console.log(Number.isNaN(+'20'));
// console.log(Number.isNaN(20 / 0));

// // melhor modo de conferir um número
// console.log(Number.isFinite(20));
// console.log(Number.isFinite('20'));
// console.log(Number.isFinite(+'20X'));
// console.log(Number.isFinite(23 / 0));

// console.log(Number.isInteger(23));
// console.log(Number.isInteger(23.0));
// console.log(Number.isInteger(23 / 0));

// // ====== Math and rounding
// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));
// console.log(8 ** (1 / 3));

// console.log(Math.max(5, 18, 23, 11, 2));
// console.log(Math.max(5, 18, '23px', 11, 2));

// console.log(Math.min(5, 18, 23, 11, 2));

// console.log(Math.PI * Number.parseFloat('10px') ** 2);

// // soma 1 no final para que o número randômico máximo seja 6, do contrário seriam gerados valores ATÉ 5
// console.log(Math.trunc(Math.random() * 6) + 1);

// // gerar valores aleatórios considerando mínimo e máximo
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min) + 1) + min;

// console.log(randomInt(10, 20));

// // Rounding integers - remove a parte decimal

// // todos esses métodos fazem type coersion

// console.log(`trunc 23.3 -- ${Math.round(23.3)}`);
// console.log(`trunc 23.9 -- ${Math.round(23.9)}`);

// console.log(`ceil 23.3 -- ${Math.ceil(23.3)}`);
// console.log(`ceil 23.9 -- ${Math.ceil(23.9)}`);

// console.log(`round 23.3 -- ${Math.round(23.2009090909)}`);
// console.log(`round 23.9 -- ${Math.ceil(23.930909)}`);

// console.log(`floor 23.3 -- ${Math.floor(23.3)}`);
// console.log(`floor 23.9 -- ${Math.floor('23.9')}`);

// console.log(`trunc 23.3 -- ${Math.round(23.3)}`);
// console.log(`trunc 23.9 -- ${Math.round(23.9)}`);

// // O método floor trabalha melhor com números positivos e negativos
// console.log(`trunc -23.3 -- ${Math.trunc(-23.3)}`);
// console.log(`trunc -23.3 -- ${Math.floor(-23.3)}`);

// // Números flutuantes
// // toFixed retorna uma String
// console.log((2.7).toFixed(0));
// console.log((2.7).toFixed(3));
// // pra transformar dnv em número
// console.log(+(2.7).toFixed(3));

// // Remainder operator
// // retorna o resto da operação de divisão
// console.log(5 % 2);

// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
//     if (i % 2 === 0) row.style.backgroundColor = 'gray';
//     // if (i % 3 === 0) row.style.backgroundColor = 'blue';
//     else row.style.backgroundColor = 'pink';
//   });
// });

// // BigInt
// // tipo especial de integer, introduzido em 2020
// console.log(2 ** 53 - 1);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(2 ** 55);

// // BigInt pode armazenar números realmente grandes
// console.log(43450987833498127608787n);
// console.log(BigInt(43450987833498127608787));

// // Operações com BigInt
// console.log(100000n + 100000n);
// // // Não pode somar BigInt com outro tipo de número - retorna erro
// // // É necessário converter antes
// // console.log(100000n + 23);

// const huge = 43450987833498127608787n;
// const num = 23;
// console.log(huge + BigInt(num));

// console.log(999n + BigInt(22));
// // operacao com erro porque os números são de tipos diferentes
// // console.log(11n / 3);
// console.log(11n / 3n); // esse retorna 3n -- o número mais próximo possível
// console.log(11 / 3);

// // Date and Time
// // Creating Dates
// const now = new Date();
// console.log(now);

// // Parse a date
// console.log(new Date('Mon May 17 2021 20:57:00'));
// // console.log(new Date('2021-05-17-07.13.22.755000')); // não funciona
// console.log(new Date('December 25, 2015'));

// console.log(new Date(account1.movementsDates[0]));

// // assim dá certo
// console.log(new Date(2037, 10, 19, 15, 23, 5));
// // o mês começa a contar no 0 em js
// // assim retorna data errada -- muitos argumentos
// // console.log(new Date(2021, 05, 17, 07, 13, 22, 755000));

// // Hora inicial
// console.log(new Date(0));

// // como converter milissegundos em dias - daqui 3 dias
// console.log(new Date(3 * 24 * 60 * 60 * 1000));

// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDay()); // pega o dia da semana
// console.log(future.getDate());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString());
// console.log(future.getTime()); // quanto passou desde o momento 0
// console.log(new Date(2142267780000));

// // hora agora em formato timestamp
// console.log(Date.now());

// // para mudar o ano.. métodos similares funcionam para hora, dia, etc
// future.setFullYear(2040);
// console.log(future);

// Adding dates to 'Bankist' App

// Cálculos com datas
const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const caldDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = caldDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 4));

console.log(days1);

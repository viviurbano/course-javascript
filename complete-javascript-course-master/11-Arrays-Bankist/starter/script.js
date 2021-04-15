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

console.log(displayMovements(account1.movements));

// btnLogin.addEventListener('click', function (e) {
//   e.preventDefault();
//   currentAccount = accounts.find(
//     (acc = acc.username === inputLoginUsername.value)
//   );

//   if (currentAccount && currentAccount.pin === +inputLoginPin.value) {
//     console.log(currentAccount);
//   }
// });

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

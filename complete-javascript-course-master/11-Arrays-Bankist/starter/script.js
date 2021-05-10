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

const displayMovements = function (arr, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}"> ${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//buscar o objeto inteiro, já que vamos lidar com mais de uma propriedade
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
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

// Aqui é passado o array com todos os usuários, já que qualquer um poderia logar
createUsernames(accounts);

//função para atualizar os valores do extrato na tela
// aqui vai receber uma conta só, no caso, do usuário logado
const updateUI = function (acc) {
  //display movements
  displayMovements(acc.movements);

  //display balance
  calcDisplayBalance(acc);

  //display summary
  // aqui precisa passar o objeto inteiro pq a função vai usar 2 propriedades
  calcDisplaySummary(acc);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}`;

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}`;
  // a label já é vermelha, então não precisa do negativo

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest}€`;
};

///////////////////////////////////////
// Event handlers

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // this preventDefault change the default behavior of the Form js, that is reload the page
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  // usando a versão `if (currentAccount?.pin === Number(inputLoginPin.value))` lançaria erro. A versão abaixo ' mais elegante'
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;

    //muda a visualização do aparecer
    containerApp.style.opacity = 100;

    // clear input fields
    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    // para o mouse para de piscar no PIN
    inputLoginPin.blur();

    // Update dos valores da UI -já que tem que retornar os valores do usuário que logou
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }

  inputLoanAmount.value = '';
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  const amount = Number(inputTransferAmount.value);

  //verificar se o usuário tem dinheiro para emprestar
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    //transferência entre as contas de quem vai fornecer x receber o dinheiro
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //Update UI
    updateUI(currentAccount);
  }

  inputTransferAmount.value = '';
  inputTransferTo.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = '';
  inputClosePin.value = '';
});

// no incício o array de movements não está organizado
let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  // altera o estado da variável sort
  sorted = !sorted;
});

// currentAccount?.pin === Number(inputLoginPin.value)

/**
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

// O Split retorna um array
// forEach não muda o array
// o splice muda o conteúdo do array

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// labelSumIn.textContent = `${deposit}`;

// acc ->accumularor. Serve justamente para acumular algum valor
// const balance = movements.reduce((acc, cur) => acc + cur, 0);

// btnLogin.addEventListener('click', function (e) {
//   e.preventDefault();
//   currentAccount = accounts.find(
//     (acc = acc.username === inputLoginUsername.value)
//   );

//   if (currentAccount && currentAccount.pin === +inputLoginPin.value) {
//     console.log(currentAccount);
//   }
// });

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

// ForEach com maps and sets

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key) {
//   console.log(`${key.padStart(4)}: ${value.padEnd(10)}`);
// });

// // Set
// set armazena valores únicos de qualquer tipo

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

// const juliaData1 = [3, 5, 2, 12, 7];
// const juliaData2 = [9, 16, 6, 8, 3];

// const kateData1 = [4, 1, 15, 8, 3];
// const kateData2 = [10, 5, 6, 1, 4];

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

// # Reduce - precisa de uma variável que vai acumular os valores da função estabelecida e, em seguida, retorna o valor final de todos os elementos. Ou seja, dada uma função, ele 'reduz' o array a um resultado

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
// let calcAvaregeHumanAgeChain = ages =>
//   ages
//     .map(age => (age <= 2 ? age * 2 : 16 + age + 4))
//     .filter(age => age > 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length);
// ages.map(age => (age <= 2 ? age * 2 : 16 + age + 4));

//     .reduce((acc, age, i, arr) => acc + age / arr.length); É nessa linha, no el `arr` que conseguimos o tamanho correto do array para cálculo

// console.log(calcAvaregeHumanAgeChain(juliaData1));

// Find method
// usar o Find é literalmente procurar algo em um array
// É mais fácil efetuar buscas em arrays que contém objetos de estrutura similar, dado que se deseja buscar um elemento exato
// no array accounts, por exemplo, todos têm a propriedade `acc.owner`
// O find parece com o filter, mas vale lembrar que o find não retorna um array, mas um valor.

// console.log(accounts);
// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// const firstWithdral = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdral);

// const question = new Map([
//   [3][('sam', '99912222')],
//   ['tom', '11122222'],
//   ['2', '12299933'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Include
// // verifica se o array contém exatamente o valor procurado (sempre vai ser parâmetro único)
// console.log(movements.includes(70));

// Some
// // verifica se no array tem exatamente algum valor de acordo com a condição especificada
// console.log(movements.some(mov => mov > 0));

//Every
// cada um dos elementos do array deve passar na condição estabelecida
// do contrário, retorna falso
// console.log(movements.every(mov => mov > 0));

// Separate callback
// É possível declarar os argumentos de uma função atribuindo-os
// em uma variável para reutilização mais tarde
// Dependendo da estrutura do seu código, isso facilita a manutenção,
// já que a condição vai ser especificada em apenas um lugar

// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));
// console.log(...movements.filter(deposit));

// // Flat and flatmap
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// // array com mais nós
// const arrDeep = [[[1, [2, 9, 0, [99, 89]]], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(4));

// // buscar a informaçao das transações que estão nos objetos
// // armazenar os movements em um novo array, só com os valores
// const accMovements = accounts.map(acc => acc.movements);
// console.log(accMovements);

// const allMovements = accMovements.flat();
// console.log(allMovements);

// const overalMovements = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overalMovements);

// // os passos acima, mas em apenas um statement

// const overBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overBalance);

// // FlatMap - muito comum
// // aqui o flat desce só um nível
// const overBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overBalance2);

// // Sorting values
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// // sort() muda o array original
// console.log(owners.sort());
// console.log(owners);
// // sort é baseado em strings para ordenar, então ordena de acordo com a tabela ASCII (se não me engano)
// console.log(movements);
// console.log(movements.sort());

// // compare functions - também muda o array original
// // Não é possível fazer a organização de um modo realmente bom se o array tem números e letras
// // return <, A, B mantém a ordem
// // return >, B, A troca a order de descendente para ascendente

// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });
// console.log(movements);

// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (b > a) return 1;
// });
// console.log(movements);

// Create and filling arrays

// // gera um array com 7 elementos vazios
// const x = new Array(7);
// console.log(x);

// const x = new Array(7);

// // fill(<numero que preencherá o array>, <index onde comeca>, <index onde termina>)
// x.fill(1, 3, 6);
// console.log(x);

// const arr = [1, 2, 3, 4, 5];

// let y = Array.from({ length: 7 }, () => 1);
// console.log(y);
// // o _ indica que a variável não será usada
// // const z = Array.from({ length: 7 }, (_, i) => i + 1);

// const z = Array.from({ length: 7 }, (curr, i) => i + 1);
// console.log(z);

// //gerar um número aleatório - maximo 100->length
// const w = Array.from(
//   { length: 100 },
//   (curr, i) => i * Math.random().toFixed(0)
// );
// console.log(...w);

// const n = 13;

// const decToBin = function (n) {
// const resultsArr = [];
// let resto = '';

// resultsArr.push(n % 2);
// for (let i = 0; i <= n; i++) {
//   n = n / 2;
//   resto = n % 2;
//   console.log(`n: ${n} --- resto: ${resto} --- i: ${i}`);
//   resultsArr.push(Math.floor(resto % 2));
// }

// let binario = resultsArr.reverse();
// console.log(binario);

// let contador = 0;
// for (let i = 0; i < binario.length; i++) {
//   if (binario[i - 1] === 1 && binario[i] === 1) {
//     contador++;
//   }
// }
// return contador;

//   var n = parseInt(readLine()).toString(2);
//   var splits = n.split('0');
//   console.log(
//     splits
//       .map(function (elem) {
//         return elem.length;
//       })
//       .reduce(function (a, b) {
//         if (a > b) return a;
//         else return b;
//       })
//   );
// };
// console.log(decToBin(n));

// // 1. Ao todo, quanto foi depositado  no banco?
// const bankDepositSum = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .filter(mov => mov > 0)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(bankDepositSum);

// // 2. Quantos depósitos foram de pelo menos 1.000 euros?
// //Modo 1 de fazer - com length
// const bankDepositThousand1 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;
// console.log(bankDepositThousand1);

// // Modo 2 - usando reduce
// const bankDepositThousand2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);
// console.log(bankDepositThousand2);

// // 3. reduce  💥💥💥💥 difícil
// const sums = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );
// console.log(sums);

// // 4. Title case
// // algumas letras viram maiúsculas
// const convertTitleCase = function (title) {
//   const capitalize = str => str[0].toUpperCase() + str.slice(1);
//   const exceptions = ['a', 'an', 'the', 'but', 'or', 'not', 'on', 'in', 'with'];
//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word =>
//       exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
//     )
//     .join(' ');
//   return capitalize(titleCase);
// };

// console.log(convertTitleCase('but ARE AN examplE, HERE OR, NEW'));

// // Day 08
// const input = `7
// sam 99912222
// tom 11122222
// harry 12299933
// madruga 00000
// barriga 9999
// florinda
// kiko 7777
// sam
// tom
// barriga
// flor
// florinda
// kiko`;

// const processData = function (input) {
//   let [numLines, ...data] = input.split('\n');
//   numLines = parseInt(numLines);
//   let arrData = [];

//   for (let str of data) {
//     // console.log(str.split(' '));
//     arrData.push(str.split(' '));
//   }
//   // console.log(arrData);

//   // apenas os nomes para a agenda
//   const agenda = arrData.slice(0, numLines);
//   // console.log(agenda);

//   // apenas os nomes que serão procurados
//   const searchingFor = arrData.slice(numLines);
//   // console.log(searchingFor);

//   // searchingFor.forEach(key => console.log(key));
//   console.log(`========`);
//   searchingFor
//     .map(key => key)
//     .filter(key => {
//       // console.log(key);
//       console.log(agenda.includes(key[0]));
//     });

//   // =================================

//   // let agenda = {};
//   // for (let i = 0; i < numLines; i++) {
//   //   let temp = contact[i].split(' ');
//   //   agenda[temp[0]] = agenda[temp[1]];
//   //   // agenda[temp[0]] = temp[1];
//   // }

//   // for (let i = 0; i < numLines; i++) {
//   //   let temp = contact[i].split(' ');
//   //   agenda[temp[0]] = temp[1];
//   // }

//   // for (let i = numLines; i < contact.length; i++) {
//   //   if (agenda[contact[i]]) {
//   //     console.log(contact[i]);
//   //     console.log(`${contact[i]}=${agenda[i]}`);
//   //   } else console.log(`Not found`);
//   // }
// };

// processData(input);

// Day 16
// const S = `a`;

// // const strToNumber = function (s) {
// //   const numb = Number(s);
// //   if (Number(numb)) {
// //     console.log(`${numb}`);
// //   } else console.log(`Bad string`);
// // };

// const strToNumber2 = function (s) {
//   try {
//     const numb = Number(s) || error;
//     console.log(numb);
//   } catch (error) {
//     console.log(`Bad string`);
//   }
// };

// strToNumber2(S);

// // Day 11

// const input = `1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 2 4 4 0
// 0 0 0 2 0 0
// 0 0 1 2 4 0`;

// const hourglass = function (arr) {
//   const matrix = arr.split('\n');
//   console.log(matrix);
//   matrix.forEach(el => console.log(el));
// };

// hourglass(input);

const s = `
amazing
another
third`;

console.log(s.split('').join(' - '));

// Diferença entre .forEach() e .map()
// o .forEach() executa uma dada função em cada elemento de um array
// o .map() invoca um callback passado por argumento para cada elemento do array e retorna um NOVO array
// Map permite concatenar outros métodos como filter, reduce, etc. O forEach não permite, já que não retorna um array

let arr = [1, 2, 3];

// arr.forEach(el => el * 2).reduce((acc, el) => el + acc);
// console.log(newArr);
// console.log(arr);

const newArr2 = arr.map(el => el * 2).reduce((acc, el) => el + acc);
console.log(newArr2);
// console.log(arr);

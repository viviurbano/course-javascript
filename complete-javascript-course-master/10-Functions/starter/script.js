'use strict';
const flight = 'LH234';
const viviane = {
  name: 'Viviane Urbano',
  passport: 12335,
};

const checkIn = function (flightNum, passager) {
  flightNum = 'LH999';
  passager.name = 'Mrs.';
};

// const btnClose = document.querySelector('.buy');
// const greet = () => console.log(`Hey, Viviane`);
// btnClose.addEventListener('click', greet);

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting}, ${name}`);
//   };
// };
// const greetHey = greet('Hey');
// greetHey('Vivi');

// const greetArrow = greeting => {
//   return name => console.log(`${greeting}, ${name}`);
// };
// const greetHeyArrow = greet('Hey');
// greetHeyArrow('Vivi arrow');

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat at ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({
//       flight: `${this.iataCode}${flightNum}, ${name}`,
//     });
//   },
// };

// lufthansa.book(239, 'Viviane Urbano');
// lufthansa.book(635, 'Fabio Franco');
// console.log(lufthansa);
// // deixa de ser um método apenas desse objeto.
// // passa a ser um método que pode ser reutilizado em novos objetos.
// // para poder ser reusado, o novo objeto DEVE ter as mesmas caracteristicas do objeto anterior
// const book = lufthansa.book;

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// book.call(eurowings, 177, 'Vanessa');
// console.log(eurowings);

// const manowings = {
//   airline: 'Manowings',
//   iataCode: 'MW',
//   bookings: [],
//   teste: 'Nada importante',
// };

// objeto + argumentos para o método chamado
// book.call(manowings, 123, 'Lula');
// console.log(manowings);

// const meuArr = [1, 2, 'a', 'b', 'Vivi', 'Fabio'];
// console.log(meuArr);

// const [n1, n2, ...resto] = meuArr;
// console.log(n1);
// console.log(n2);
// console.log(resto);

// console.log(meuArr);
// console.log('=======');
// console.log(...meuArr);

// book.bind retorna uma função

// const bookEW = book.bind(eurowings);
// bookEW(37, 'Vania');

// const meuTeste = {
//   meuNome: 'Viviane',
//   meuIMC(tamanho, peso) {
//     // return this.meuTamanho;
//     return peso / (tamanho * tamanho);
//   },
// };

// console.log(meuTeste.meuIMC(144, 65));

// (function () {
//   console.log('will never run again');
// })();

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);

    // console.log(passengerCount);
  };
};

const booker = secureBooking(); // aqui o número de passageiros é zero
const newBooker = secureBooking();

booker();
booker();
booker();
//zera a contagem, mas ainda usa a mesma funcão
newBooker();
newBooker();
// mantém contagem da função booker()
booker();

console.dir(booker);
console.dir('=========');
console.dir(newBooker);

const addOne = function () {
  let num = 0;
  return function () {
    num + 1;
  };
};

const callAddOne = addOne();

console.log(callAddOne());
callAddOne();
callAddOne();
console.log('=========');
console.dir(callAddOne);

const fat = function (num) {
  return num > 1 ? num * fat(num - 1) : 1;
};

somarExpressao(1, 2);
const somar = function (a, b) {
  console.log(a + b);
};

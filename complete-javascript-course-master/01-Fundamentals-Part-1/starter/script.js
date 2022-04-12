console.log("oi");
// alert("JS is fun");
let PI = 3.14;

let country = "Brasil";
let continent = "South America";
let population = 215000000;

/**
 * CONST
 * can't mutate the value of the variable or will throw an error
 * Must be initialized or will throw an error
 * It is recommended always use CONST to declare variables. Why?
 * 1 - have minimal values changed
 * 2 - change a variable's value introduce potential errors in your code
 * So use CONST as much as possible
 */

/**
 * LET
 * Is it possible change the value later (mutate the variable)
 * Anyway, avoid use LET to declare variables
 */

/**
 * VAR
 * A-V-O-I-D declare VAR variable
 * There are 3 importants diferences between VAR and CONST
 * I will describe a little more detailed later, but as a resume:
 * VAR is function-scoped
 * LET is block-scoped
 */

// Template literals
// const myName = "Viviane";
// const myProfession = "caçadora de memes";
// console.log(`Oi, eu sou ${myName}, minha profissão é ... ${myProfession} `);

// const age = 18;
// const isOldEnough = age >= 18;

// *** Type conversion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(inputYear + 18);

// *** Type coersion
// 5 falsy values: 0, '', undefined, null, NaN
// var undef;

// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(undef));
// console.log(Boolean("Vivi"));

// In a comparation, these value will be coersed (?) to false
// const money = 0;
// if (money) {
//   console.log(`Don't spend it all`);
// } else {
//   console.log(`You should get a job!`);
// }

// bug. Apensar de height estar declarado, fica como UNDEFINED
// let height = 0;
// if (height) {
//   console.log(`YAY. Height is defined`);
// } else {
//   console.log(`Height is UNDEFINED`);
// }

const day = "monday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  // aqui para qualquer caso wednesday ou thursday vai ser executada a instruçao logo abaixo
  case "wednesday":
  case "thursday":
    console.log("Record videos");
    break;
  default:
    console.log("Not a valid day ");
}

const age = 18;

age > 18 ? console.log("Yes, go drive") : console.log("Call a taxi");

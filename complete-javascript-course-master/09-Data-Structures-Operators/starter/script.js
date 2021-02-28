'use strict';

const restaurant = {
  name: 'Restaurante Chuchu Classico Italiano',
  locationX: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  meuArray: {
    itemUm: {
      nome: 'Viviane',
      profissao: 'engenheira da Nasa',
    },
    itemDois: 'Vivão',
    profissao: 'Também é engenheira da Nasa',
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
    sun: {
      open: 14, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex, catIndex) {
    return [
      this.starterMenu[starterIndex],
      this.mainMenu[mainIndex],
      this.categories[catIndex],
    ];
  },
  // Primeiro modo, recebendo o objeto completo
  // orderDelivery: function (obj) {
  //   console.log(obj);
  // },

  // // Segundo modo, fazendo o destructuring propriamente
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/*
// #################### Destructuring Arrays ####################
// #################### Destructuring Arrays ####################

// No destructuring o conteúdo do array original não é afetado. Os valores são 'desempacotados' e atribuídos nas variáveis criadas
// 1) Destructuring de um array a partir do objeto restaurante.categories
// Destructuring de array é feito usando [colchetes].
// Como trata-se de um array (e que portanto tem índice) é possivel pular um elemento.
// Para pular o elemento é só usar uma virgula e não declarar nome para variável, assim o valor é 'pulado'
let [mainCat, , secondCat, thirdCat] = restaurant.categories;
console.log(mainCat, secondCat, thirdCat);

// 2) Mutating variables -> Trocar valor de variáveis sem usar variável intermediária
// É possível fazer a reatribuição inclusive com mais do que duas variáveis
[thirdCat, mainCat, secondCat] = [secondCat, mainCat];
console.log(`Main, secondary alteradas: `, mainCat, secondCat);

// 3) Função que retorna um array
// Criar um método no objeto indicando qual propriedade (this) será usada para a atribuição de valores.
// Foi criado o método `order`
// É possível fazer o destructuring para diversas propriedades em uma única função
// Se na função não for passado um índice como argumento, será retornado o array completo da propriedade
// Importante notar que a função em si não cria o destructuring
// Para que ocorra, é necessário atribuir os resultados da função em variáveis
console.log(restaurant.order(2, 0, 3));
const [starter, main, thirt] = restaurant.order(2, 0, 3);

// 4) Array aninhado
const nested = [2, 4, [5, 6, 9]];

// 4.1) O array nested tem elementos e um array aninhado  
// Lembre-se que o array possui índice, então é só 'pular' o valor que não quer guardar
// Destructuring do primeiro elemento e do array aninhado
// Nesse exemplo o j vai receber o array aninhado como valor
const [i, , j] = nested;
console.log(i, j);

// 4.2) Pegar os valores individualmente de um array aninhado
// É necessário fazer o destructuring de um destructuring 
// Pode parecer complicado, mas basta lembrar da sintaxe do destructuring []
// Assim como nos outros exemplos, caso não queira algum elemento, basta não atribuir para uma variável
const [i, , [j, k, l]] = nested
console.log(i, j, k, l);

// 5) Definir valores padrão 
// Quando vc não conhece o array que vai receber é ideal declarar valores padrão
// Isso é muito comum no dia a dia
// O valor default é definido já na declaração da variável
const [p = 1, q = 1, r = 1] = [9];
console.log(p, q, r);
*/

/*
// #################### Destructuring Objects ####################
// #################### Destructuring Objects ####################

// 1) Destructuring de objeto
// Para fazer o destructuring de objetos é necessário usar { chaves } já que esse é o modo como objetos são criados
// Também é necessário informar qual propriedade será enviada para o objeto a ser criado
// Como objetos não tem ordem NÃO é necessário indicar o índice, mas é necessário indicar o nome da propriedade que se deseja copiar
// O nome da variável do destructuring DEVE ser igual ao da variável original, do contrário retornará erro
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// 2) Se quiser que a variável criada tenha um nome diferente da propriedade original use propriedade:novoNome
const { name: novoNome, openingHours: novoOpening } = restaurant;
console.log(novoNome, novoOpening);

// 3) Valores padrão
// É possível declarar valores default usando [] para propriedades que não se sabe se estão preenchidas ou não
// Também é possível dar um novo nome para propriedade e fornecer um valor padrão
// No exemplo abaixo, a propriedade menu não existe, então retornará o valor default
// Sem isso, retornaria um valor undefined
const { menu = [], starterMenu: startes = [] } = restaurant;
console.log(menu, startes);

// 4) Mutating variables -> Trocar valores sem usar variável intermediária
// Fazer a troca de valores por meio do destructuring em objetos é um pouco diferente de arrays
// Para fazer a troca é necessário fazer o wrap () da atribuição, caso contrário retornará erro
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// 5) Objetos aninhados em objetos
// É necessário declarar a atribuição diretamente para a propriedade(objeto aninhado) que será copiado
// Não obrigatório indicar o objeto maior (o que engloba), mas é bom declarar só para o código ficar mais legível
const {
  sat: { open: o, close: c },
} = restaurant.openingHours;
console.log(o, c);

const {
  itemUm: { nome: nomeDaPrincesa, profissao: profissaoDaPrincesa },
} = restaurant.meuArray;
console.log(`${nomeDaPrincesa} é ${profissaoDaPrincesa} 😎`);

// 6) Declarar um método que retorna um objeto com várias informações
// Veja o método orderDelivery
// Essa técnica é amplamente usada em js, especialmente em bibliotecas de terceiros
// Importante notar que o método suporta UM objeto. Não se tratam de quatro argumentos 
// É realmente apenas UM objeto. Repare na sintaxe ao passar os valores
// Assim que o objeto é recebido é imediatamente feito o destructuring de seus valores
restaurant.orderDelivery({
  time: '22h30',
  address: 'Rua do Sol',
  mainIndex: 2,
  starterIndex: 2,
});

*/

/*
// #################### Spread Operator ####################
// #################### Spread Operator ####################

// 1) O operador spread é usado para expandir um array em seus elementos
// Então, basicamente, todos os elementos do array são descompactandos
// Imagine que temos um array, mas queremos criar um novo com cada um dos elementos do array original, adicionando também alguns elementos novos.
// Usar o spread operator é o equivalente a tirar CADA UM dos elementos do array original e copiá-los no novo array individualmente. 
// Os valores são copiados; não a estrutura do array.  
const arr = [7, 8, 9];
const badNewArry = [1, 2, arr[0], arr[1], arr[2]];
const newArray = [1, 2, ...arr];
console.log(newArray);

// 2) Usar o spread operator para passar argumentos para uma função
// Se quisermos ver o array no log, seria necessário chamar o console.log
console.log(arr);

// Mas, se quisermos consultar os elementos INDIVIDUALMENTE podemos usar o spread.
// Ou seja, o spread operator está apresentando cada elemento como único. 
Não está buscando o array completo, mas seus elementos individualmente.
console.log(...arr);

// Mais um exemplo criando um array com novo elemento:
const newMenu = [...restaurant.mainMenu, 'Gnocci'];

// Note que o spread operator tem uma sintaxe similar ao destructuring, já que ele também ajuda a extrair elementos dos arrays.
// A grande diferença é que o operador spread pega TODOS os elementos do array e também não cria novas variáveis.
// Como consequência, só podemos usá-lo em lugares onde escreveríamos valores separados por vírgulas, como passar argumentos para funções.

// 3) Shallow copy --> Cópias 'rasas' de arrays
const mainArray = [...restaurant.mainMenu];

// 4) Juntar dois arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// 5) Spread operators podem ser usados em qualquer ITERABLE 
// Nesse momento, podemos entender que são itens como arrays, strings, maps, sets, 
// Lembre que objetos NÃO não são iterable

// Exemplo em um string
const myName = 'Princesa Rainha do Universo';
const newNome = [...myName];
console.log(newNome)

// Curiosidade
// Já que é um iterable, dá para apontar para um índice específico
console.log(...myName[2])

// 6) Spread operator não deve ser usado em template literals ou vai retornar erro Unexpected token '...'

// 7) Função que aceita vários argumentos.
// Veja orderPasta
const ingredients = [prompt("Let\s make pasta! Ingredient 1?"), prompt("Ingredient 2?"), prompt("Ingredient 3?")]
restaurant.orderPasta (...ingredients)

// 8) Desde 2018 o spread operator atua em elementos que não são iterable, como objetos
// Copiando o objeto original e incluindo dados
const newRestaurant = {...restaurant, founder: 'Viviane'}

// 8.1) Shallow copy --> cópia rasa
const restaurantCopy = {...restaurant}

// 8.2) Mudando o nome de uma propriedade
restaurantCopy.name = 'Novo Nome';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

/*
// #################### Rest Pattern e Rest parameters ####################
// #################### Rest Pattern e Rest parameters ####################

// 1) O Rest Pattern tem exatamente a mesma sintaxe que o spread operator, mas faz exatamente o oposto.
// Então, o que o Rest Pattern faz é colocar os dados em um array.
// A sintaxe do Rest Pattern fica parecendo uma mistura entre o destructuring e o spread.
// Para entender direito o que está acontecendo e NÃO se confundir, observe em que lado estão os três pontos. 
// SPREAD, porque está do lado DIREITO da atribuição, então vai desempacotar os elementos do array 
const arr = [1, 2, ...[3, 4]];
console.log(arr)
// REST, porque está do lado ESQUERDO da atribuição, então vai receber valores para uma variável
const [a, b, ...others] = [1, 2, 3, 4, 5]
console.log(a, b, others)

// 2) Usando os ... em ambos os lados em arrays
// O rest deve ser o último elemento no destructuring porque ele vai coletar todo o 'resto' dos valores
const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizza, risotto, otherFood);

// 3) Usando os ... em ambos os lados em objetos
// Assim como funciona com arrays, usar a sintaxe de ... funciona de modo similar em objetos.
// A diferença (provavelmente esperada) é que os elementos serão armazenados em um objeto, não em um array.
// atenção na hora de informar o objeto do lado direito. Não tem colchetes.
const { sat, ...weekDays} = restaurant.openingHours;
console.log(sat, weekDays);

// 4) Functions
// Imagine uma função que, dependendo da situação, possa mudar a quantidade de argumentos que recebe.   
const add = function(...numbers){
  console.log(numbers);
}
add(2, 3);
add(2, 3, 5, 6, 7);
add(2, 3, 5, 6, 7, 33, 77);

const sumAll = function(...numbers){
  let sum = 0;
  for(let i=0; i < numbers.length; i++){
    sum += numbers[i];
  }
  console.log(sum)

}
sumAll(2, 3);
sumAll(2, 3, 5, 6, 7);
sumAll(2, 3, 5, 6, 7, 33, 77);

const x = [23, 5, 7];
add(...x)

// 4.1) Argumentos da função, como elemento e array
Veja a método orderPizza
// O primeiro argumento vai para a variável mainIngredient e todo o restante será armazenado em um array no otherIngredients
// Se apenas um argumento for passado, ele será armazenado no mainIngredient e o otherIngredients ficará vazio.

*/

/*
// #################### Short circuiting && and || ####################
// #################### Short circuiting && and || ####################

// 1) O short circuiting é um modo moderno de utilizar os operadores && e || para verificar lógica, fazendo a comparação com dados que não são boolean
// Pode ser usado com qualquer tipo de dado
// Retorna qualquer tipo de dado
// Isso também é conhecido como Short circuiting Evaluation
console.log(3 || 'Viviane');
console.log(3 && 'Viviane');

// 2) Operador OR
// 2.1 Se o primeiro valor for verdadeiro, ele é retornado
// O js não vai sequer avaliar o segundo valor
console.log(3 || 'Viviane');

// 2.2 Como '' é um valor falso, o segundo valor é retornado
console.log('' || 'Viviane');
 
 // 2.3 O true é um valor verdadeiro, então é retornado
console.log(true || 0);

// 2.4 Retorna o primeiro valor verdadeiro. Hello, no caso 
console.log(undefined || 0 || '' || 'Hello' || 23 || null );

// 2.5 Se o valor existir, retorna o valor definido
// Senão, retorna o número 10.
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10
console.log(guests1)

// Usando o short circuiting 
const guests2 = restaurant.numGuests || 10;
console.log(guests2)

// Nos exemplos acima caso o valor de restaurant.numGuests seja 0, o resultado será 10
// Isso ocorrerá porque o 0 é considerado um valor falso
// Em breve vermos uma solução para esse tipo de problema 

// 3) Operador AND
// O operador AND trabalha de modo oposto ao OR
// Isso significa que o operador AND avalia os valores e retorna o valor FALSO
// O operador AND irá avaliar o primeiro valor e caso o primeiro seja falso, ele será o retorno. 
// Ou seja, assim que o primeiro elemento falso for encontrado, o operador interrompe a comparação
// Caso não tenha sido encontrado valor falso, o último valor será retornado
console.log('' && 'Viviane');

// 3.1) Exemplo usando o objeto restaurant

// Para evitar comparacões deste modo, é possível usar o short circuiting
if(restaurant.orderPizza){
  restaurant.orderPizza('mushrooms', 'spinach')
}

// Ficaria assim
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach')
 */

/**
// #################### Nullish Coalescing Operator (??) ####################
// #################### Nullish Coalescing Operator (??) ####################

// 1) O operador de coalescência nula (??) é um operador lógico que retorna o seu operando do lado direito quando o seu operador do lado esquerdo é null ou undefined. Caso contrário, ele retorna o seu operando do lado esquerdo.
// Relembrando o exemplo anterior, com operador OR, o resultado seria 10, já que a propriedade restaurant.numGuests não existe
restaurant.numGuests = 0;
const guests2 = restaurant.numGuests || 10;
console.log(guests2)

// Usando o operador ?? esse erro é sanado
restaurant.numGuests = 0;
const guestCorretc = restaurant.numGuests ?? 10;
console.log(guestCorretc)
 
// Esse operador corrige o erro porque ele trabalha com os conceitos de null e undefined
// Isso não inclui 0 ou ''
*/

/*
// #################### Code challenge ####################
// #################### Code challenge ####################

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels', 'Lewandowski'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1
const [players1, players2] = game.players;
console.log(players1, players2);

// 2
const [[gk, ...fieldPlayers]] = game.players;
console.log(gk, fieldPlayers);
const [, [gk2, ...fieldPlayers2]] = game.players;
console.log(gk2, fieldPlayers2);

// 3
const allPlayers = [...players1, ...players2];
// const allPlayers = [...game.players[0], ...game.players[1]];
console.log(allPlayers);

// 4
// const players1Final = ['Thiago', 'Coutinho', 'Persic', ...game.players[0]];
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Persic'];
console.log(players1Final);

// 5
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);
//6
const printGoals = function (...players) {
  console.log(`${players.length} gols marcados`);
};
printGoals('um', 'dois', 'tres', 'um', 'dois', 'tres');

// 7
team1 < team2 && console.log(`Team 1 is more likely to win`);
team1 > team2 && console.log(`Team 1 is more likely to win`);


*/

/* 
// #################### Looping arrays: the for-of loop ####################
// #################### Looping arrays: the for-of loop ####################

// Para exibir todos os elementos do array menu, seria possível criar um loop já conhecido como o for
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// Adotando a estrutura for-of é possível fazer esse mesmo loop de modo mais fácil
// O for-of itera sobre todo o array, sem a necessidade de declararmos variável de controle
// A variável criada 'item' poderia ter qualquer nome
// Abaixo, podemos ler da seguinte maneira
// Para cada variável 'item' do array menu, imprima seu valor
for (const item of menu) console.log(`Esse é o item ${item}`);

// Exibindo com o índice
for (const item of menu.entries()) {
  console.log(`${item}`);
}

// Modo 'velho' de fazer
for (const item of menu.entries()) {
  console.log(`${item[0]}: ${item[1]}`);
}
console.log('####');
// Modo novo, inclusive com destructuring
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}


*/

/* 
// #################### Enhanced object literals ####################
// #################### Enhanced object literals ####################

// Enhanced object literals = Literais de objeto aprimorados

*/

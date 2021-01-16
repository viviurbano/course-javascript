# Here you can access fast info about js

if you'd like to use syntax highlighting, include the language:

```javascript
if (isAwesome) {
  return true;
}
```

_This text will be italic_
\_This will also be italic_1

**This text will be bold**
**This will also be bold**

_You **can** combine them_

**Blockquotes**
As Kanye West said:

> We're living the future so
> the present is our past.

**Task Lists**

- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [ ] this is an incomplete item

# livro Use A Cabeça Javascript

:confused:

linguagem interpretada

A maior parte do código JavaScript é executada quando algo ocorre na página como, por exemplo, a página sendo carregada ou o usuário clicando em um botão. Um mecanismo JavaScript conhecido como “evento” permite iniciar uma parte do código JavaScript quando algo de interesse ocorre na página

O JavaScript não permite a você ler ou escrever arquivos no disco rígido do usuário. Esta limitação acaba com o potencial de muitos vírus e código malicioso parecido

A tag <script> é HTML e sua finalidade é fornecer um meio de misturar o código do script com o código HTML. O código que aparece dentro da tag <script> é o código JavaScript.

A tag <script> é para suportar diversas linguagens de script, você indica que o código é JavaScript usando seu atributo type.

O evento onload é inicializado quando uma página termina da carregar

Você responde ao evento onload defnindo o atributo onload da tag <body>

# Javascript: Definitive guide

Check the repository on github
`https://github.com/davidflanagan/jstdg7`

js language and js APIs

JavaScript’s variables are untyped, serious, general-purpose language suitable for large-scale software engineering.

backward compatibility

Learning a new programming language is never a linear process

**JavaScript's most important datatype is the object
An object is a collection of name/value pairs, or a string to value map. **

Access the properties of an object with . or []:

```javascript
book.topic // => "JavaScript"
book["edition"] // => 7: another way to access property values.
}
```

Como o ambiente possui node.js instado, antes de executar js é necessário executar no terminal

```javascript
node
}
```

Em seguida, prosseguir com os comandos de js. Essa dica serve apenas para não usar o console do navegador.

```javascript
let primes= [2, 3, 5, 7]
}
```

An expression is a phrase of JavaScript that can be evaluated to produce a value. For example, the use of . and [] to refer to the value of an object property or array element is an expression.

One of the most common ways to form expressions in JavaScript is to use operators:
Operadores agem sobre os valores para resultar em um novo valor

Para concatenar values

```javascript
"3" + "2"
}
```

`===` é operador de estritamente igual, ou seja, por Valor e Tipo

js expressions are like phrases.
A expression is something that computes a value, but _doesn't do anything_. It doesn't change the programm anyway

js statements are like full sentences.
Statements don't have a value, but they do alter the state. Think on control strutures (conditional and loops): they are statements

**Função**
É um bloco de código quem contém um nome e é parametrizado. Assim, a função pode ser invocada quantas vezes necessário. Funções podem ser de atribuídas a variáveis, por exemplo:

```javascript
let square = function (x) {
  return x * x;
};
```

Uma funcao pode invocar outra funcao(qual nome disso?):

```javascript
function plus1(x) {
  return x + 1;
}
```

```javascript
square(plus1(y));
```

Tem uma forma abreviada para criar funções. É necessário usar => para separar a lista de argumentos do corpo da função. As funções definidas dessa forma são conhecidas como _**arrow function**_.
Elas são usadas quando se deseja passar uma função sem nome como argumento para outra função

```javascript
const plus1 = (x) => x + 1;
```

```javascript
const square = (y) => y * y;
```

JavaScript supports an object-oriented programming style, but it is significantly different than “classical” object-oriented programming languages.

**From botton to higher level**

1. comments, identifiers, variables,
2. types
3. build to expressions, statements, objects, and functions;
4. abstractions like classes and modules.

When we use functions with objects, we get methods:

> Quando usamos funções com objetos, obtemos métodos:

# Chapter 1. Introdução ao js

# Chapter 2. Lexical Structure

A estrutura lexical é um Conjunto de regras elementares que especificam como escrever o código da linguagem

- Case sensitivity, spaces, and line breaks
- Comments
- Literals
- Identifiers and reserved words
- Unicode
- Optional semicolons

#unicode #ASCII

## Never break line in this cases:

1. return, throw, yield, break, and continue statements
   Essas instruções geralmente são independentes, mas às vezes são seguidas por um identificador ou expressão. Se uma quebra de linha aparecer após qualquer uma dessas palavras (antes de quaisquer outros tokens), o JavaScript sempre interpretará essa quebra de linha como um ponto-e-vírgula. Por exemplo, se você escrever:

`return`
`true;`

O JavaScript assume que você quis dizer:

`return; true;`

No entanto, você provavelmente quis dizer:

`return true;`

2. Operadores ++e −−
   Se você quiser usar qualquer um desses operadores como operadores pós-fixados, eles devem aparecer na mesma linha da expressão à qual se aplicam.

3. A terceira exceção envolve funções definidas usando sintaxe concisa de “seta”: a =>própria seta deve aparecer na mesma linha da lista de parâmetros.

# Chapter 3. Tipos, valores e variáveis

Uma das características mais fundamentais de uma linguagem de programação é o conjunto de tipos que suporta

Problema de arredondamento
Diviões por zero resultam em NaN, não em erro necessariamente
BigInt() para convertar numeros regulares para números realmente grandes
Exemplo de uso:
Defina a variável
`let newString = "1".repeat(4) + "0".repeat(100)`
Execute o método BigInt()
`BigInt(newString)`

length is a propertie, not a function

#### Importante

> Remember that strings are immutable in JavaScript. Methods like replace() and toUpperCase() return new strings: they do not modify the string on which they are invoked.

Operator

`&&` e
`||` ou

### null and undefined

null - abscense of value
undefined - the variable has been declared, but wasn't assigned value

Pay attention that type of declaration `let b = ""` will be string.

### the Global Object

This object are the globally defined identifiers that are available to a JavaScript program.
In web browsers, the Window object serves as the global object for all JavaScript code contained in the browser window it represents. This global Window object has a self-referential window property that can be used to refer to the global object.

ES2020 finally defines globalThis as the standard way to refer to the global object in any context. As of early 2020, this feature has been implemented by all modern browsers and by Node.

### Immutable primitive values and mutable object references

**primitive values** (undefined, null, booleans, numbers, and strings) are _immutable_ : there's no way to change a primitive value
**objects** (including arrays and functions) are _mutable_

```javascript
let s = "hello"; // Start with some lowercase text
s.toUpperCase(); // Returns "HELLO", but doesn't alter s
s; // => "hello": the original string has not changed
```

> importante lembrar que o tipo de uma variável pode mudar, de acordo com seu valor.

### Type Conversions

JavaScript is very flexible about the types of values it requires.
JavaScript will convert it as needed

**Operators**

`==` (strict equality operator) Converte os valores das variáveis para o mesmo tipo antes de realizar a comparação. Isso é chamado de coerção de tipo.
`===` (este é quase sempre o operador correto a ser usado no código) Não faz nenhuma conversão de tipo (coerção) e retorna verdadeiro somente se ambos os valores e tipos forem idênticos para as duas variáveis sendo comparadas.

### Conversão explicita

Embora o js altere (de acordo com sua necesside) o tipo da variavel, às vezes é necessário explicitar seu tipo. Isso pode ser feito com funções

A maneira mais simples de realizar uma conversão explícita de tipo é usar as funções Boolean (), Number () e String ():

`Number("3") `

# Chapter 4. Expressions and Operators

**estrutura**

```javascript

```

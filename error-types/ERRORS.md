## Tipos de Erros mais comuns, causas e soluções
(traduzido do artigo - https://www.linkedin.com/pulse/common-javascript-errors-types-causes-solutions-dinesh-rawat/)

JavaScript é uma das linguagens de programação mais amplamente utilizadas, alimentando desde páginas web simples até aplicações web complexas. Embora JavaScript seja uma linguagem poderosa e flexível, ela não está isenta de peculiaridades e armadilhas. Um dos problemas mais comuns que os desenvolvedores enfrentam ao trabalhar com JavaScript são os erros. Esses erros podem impedir que seu código funcione corretamente e podem ser frustrantes de depurar.

Compreendendo esses erros e como preveni-los, você poderá escrever um código melhor e economizar tempo e dores de cabeça a longo prazo.

Vamos mergulhar e dar uma olhada em alguns dos tipos mais comuns de erros em JavaScript e como corrigi-los.

### Erros de Sintaxe

Esses ocorrem quando o código não é escrito na sintaxe correta. Exemplos comuns incluem ponto e vírgula, parênteses ou chaves faltando. Esses erros podem frequentemente ser detectados por um IDE ou editor de texto com destaque de sintaxe. Exemplos:

1.1: Usando um caractere inválido no nome de uma variável:
```javascript
let my-var = "hello";
```
Isso lançará um erro de sintaxe porque nomes de variáveis não podem conter hífens.

1.2: Usando o operador errado para comparação:
```javascript
if (x = 5) { console.log("x é igual a 5"); }
```
Isso lançará um erro de sintaxe porque `=` é um operador de atribuição, não um operador de comparação. Para comparar valores, use `==` ou `===`.

1.3: Esquecendo de fechar um bloco de código com uma chave:
```javascript
function myFunction() { console.log("Hello, world!");
```
Isso lançará um erro de sintaxe porque a definição da função está faltando uma chave de fechamento.

1.4: Usando uma palavra reservada como nome de variável:
```javascript
let function = "test";
```
Isso lançará um erro de sintaxe porque `function` é uma palavra reservada em JavaScript e não pode ser usada como nome de variável.

1.5: Colocando um número no início do nome de uma variável:
```javascript
let 123var = "test";
```
Isso lançará um erro de sintaxe porque nomes de variáveis não podem começar com um número.

### Erros de Tipo

Esses ocorrem quando uma variável ou objeto é usado de uma maneira que não é permitida pela linguagem JavaScript. Por exemplo, tentar chamar um método em uma variável indefinida resultará em um erro de tipo. Esses erros podem frequentemente ser detectados usando TypeScript ou Flow, que são ferramentas de verificação de tipo para JavaScript. Exemplos:

2.1: Tentando acessar uma propriedade de um valor nulo ou indefinido:
```javascript
let obj = null;
let value = obj.property;
// TypeError: Cannot read property 'property' of null
```

2.2: Tentando chamar uma não-função como se fosse uma função:
```javascript
let num = 10;
num();
// TypeError: num is not a function
```

2.3: Usando um operador com operandos de tipos diferentes:
```javascript
let str = "Hello";
let num = 10;
let result = str + num;
// TypeError: Cannot convert number to string
```

2.4: Passando um número incorreto ou tipo de argumentos para uma função:
```javascript
function add(x, y) { return x + y; }
add(1, 2, 3);
// TypeError: add() takes 2 arguments, but 3 were provided
```

2.5: Tentando acessar uma propriedade de um valor que não é um objeto:
```javascript
let num = 10;
let value = num.property;
// TypeError: Cannot read property 'property' of number
```

### Erros de Referência

Esses ocorrem quando uma variável ou função é referenciada, mas não foi declarada. Isso pode acontecer quando a variável ou função está com erro de digitação ou não foi definida no escopo correto. Esses erros podem frequentemente ser detectados usando um linter, que pode sinalizar variáveis ou funções indefinidas.

3.1: Chamando uma variável não declarada:
```javascript
console.log(x);
// ReferenceError: x is not defined
```

3.2: Erro de digitação no nome de uma variável ou função:
```javascript
let greeting = "Hello!";
console.log(gretting);
// ReferenceError: gretting is not defined
```

3.3: Acessando uma variável fora do seu escopo:
```javascript
function myFunc() { let x = 10; }
console.log(x);
// ReferenceError: x is not defined
```

3.4: Chamando um método em uma variável indefinida:
```javascript
let obj = {};
console.log(obj.prop.method());
// ReferenceError: prop is undefined
```

3.5: Tentando acessar uma propriedade que não existe:
```javascript
let obj = {prop: "value"};
console.log(obj.nonExistentProp);
// ReferenceError: nonExistentProp is not defined
```

### Erros de Alcance

Esses ocorrem quando um valor não está no intervalo esperado. Por exemplo, tentar acessar um índice de array que está fora dos limites resultará em um erro de alcance. Esses erros podem frequentemente ser detectados usando um depurador, que pode ajudar você a percorrer seu código e identificar onde o erro está ocorrendo.

4.1: Tentando acessar um elemento de array fora dos limites do array, como este:
```javascript
const arr = [1, 2, 3];
console.log(arr[10]);
// RangeError: Invalid array length
```

4.2: Usando o construtor Date com um valor fora do intervalo para o parâmetro do mês, como este:
```javascript
const date = new Date(2021, 13, 1);
console.log(date);
```
Neste exemplo, o parâmetro do mês está definido como 13, que está fora do intervalo (já que os meses são indexados a partir de zero, os valores válidos são 0-11). Quando este código é executado, o objeto date será criado com um valor de mês de 0 (janeiro do ano seguinte). A saída do console seria:
```
Tue Jan 06 2024 00:00:00 GMT-0800 (Pacific Standard Time)
```
Note que, embora o valor do mês esteja fora do intervalo, o construtor Date não lança um erro. Em vez disso, ele executa um "rollover" para ajustar a data a um valor válido. Esse comportamento pode ser útil em alguns casos, mas é importante estar ciente disso ao trabalhar com objetos de data.

4.3: Tentando criar um array tipado com um comprimento que excede o valor máximo permitido, como este:
```javascript
const arr = new Int8Array(2 ** 32);
// RangeError: Invalid typed array length
```

4.4: Tentando chamar o método substring de uma string com um índice inicial maior que o comprimento da string, como este:
```javascript
const str = "Hello, World!";
const sub = str.substring(15);
console.log(sub);
```
Neste exemplo, o índice inicial passado para o método substring é 15, que é maior que o comprimento da string ("Hello, World!" tem comprimento 13). Quando este código é executado, o método substring retornará uma string vazia, porque não há caracteres para extrair do índice inicial. A saída do console seria:
```
""
```
É importante garantir que o índice inicial passado para o método substring esteja dentro dos limites da string. Caso contrário, comportamentos inesperados podem ocorrer, como retornar uma string vazia ou lançar um erro.

4.5: Usando Math.pow para calcular um valor que excede o valor máximo seguro para inteiros, como este:
```javascript
console.log(Math.pow(2, 53));
// 9007199254740992
console.log(Math.pow(2, 53) + 1);
// 9007199254740992
console.log(Math.pow(2, 53) + 2);
// RangeError: Invalid array length
```

### Erros de Indefinido

Esses ocorrem quando uma variável não está definida ou tem um valor indefinido. Isso pode acontecer quando uma variável é declarada mas não inicializada, ou quando uma função retorna indefinido. Esses erros podem frequentemente ser detectados usando práticas de codificação defensiva, como sempre inicializar variáveis e verificar valores nulos ou indefinidos.

Exemplo 1:
```javascript
let x;
console.log(x);
```
Este código declara uma variável mas não atribui um valor a ela, o que significa que ela tem um valor indefinido.

Exemplo 2:
```javascript
function test() {
  console.log("test");
}
let result = test();
console.log(result);
```
Este código chama a função test, que não tem um valor de retorno, então a variável result será atribuída com um valor indefinido.

Em conclusão, erros comuns em JavaScript podem ser frustrantes de lidar, mas são uma parte natural do processo de programação. Compreendendo os tipos de erros que podem ocorrer em JavaScript e as causas por trás


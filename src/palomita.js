const numeros = require('./numbers')

function numeroExtenso(numero) {
  // verificar se a chave existe - se existir, imprime o numero
  if (numeros[numero]) {
    return numeros[numero];
  } else { // se não existir, faz conta pra "quebrar" o numero
    if (numero < 100) { //OK
      const restoDezena = numero % 10
      return `${numeros[numero - restoDezena]} e ${numeros[restoDezena]}`
    } else {
      const restoCentena = numero % 100
      const centena = numeros[numero - restoCentena] === "cem" ? "cento" : numeros[numero - restoCentena]
      if (numeros[restoCentena]) {
        return `${centena} e ${numeros[restoCentena]}`
      } else {
        const restoDezena = restoCentena % 10
        return `${centena} e ${numeros[restoCentena - restoDezena]} e ${numeros[restoDezena]}`
      }
    }
  }
}


console.log(numeroExtenso(1));
console.log(numeroExtenso(14));
console.log(numeroExtenso(24));
console.log(numeroExtenso(106));
console.log(numeroExtenso(310));
console.log(numeroExtenso(999));
console.log(numeroExtenso(1000));

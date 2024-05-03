const numeros = require('./numbers')
function numeroExtenso(numero) {
  if (numeros[numero]) {
    return numeros[numero] === "cem" ? "cento" : numeros[numero];
  }
  const resto = numero < 100 ? numero % 10 : numero % 100
  return `${numeroExtenso(numero - resto)} e ${numeroExtenso(resto)}`
}


console.log(numeroExtenso(1));
console.log(numeroExtenso(14));
console.log(numeroExtenso(24));
console.log(numeroExtenso(106));
console.log(numeroExtenso(310));
console.log(numeroExtenso(999));
console.log(numeroExtenso(1000));

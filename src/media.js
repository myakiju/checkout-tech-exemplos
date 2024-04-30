function calcularMedia(nota1, nota2, nota3) { // funcao calcularMedia (nota1, nota2, nota3) --- OK
  if (!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) { // 	SE nota1 é numero E nota2 é numero E nota3 é numero --- OK
    if (nota1 >= 0 && nota2 >= 0 && nota3 >= 0) {
      //TODO adicionar regra para notas até 10
      let soma = nota1 + nota2 + nota3; // 		soma dos numeros = nota1 + nota2 + nota3 --- OK
      let media = soma / 3; // 		media = soma dos numeros / 3

      return media.toFixed(1); // 		retornar media
    } else {
      console.error("As notas precisam ser todas maiores ou iguais a zero!")
    }
  } else { // SENAO
    console.error("As notas precisam ser todas numéricas")
  }
}

// console.log(calcularMedia(7, 5, "A"))
// console.log(calcularMedia(1, 2, 3))
// console.log(calcularMedia(7, 7, 8.5))

console.log(calcularMedia(7, 5, 10))

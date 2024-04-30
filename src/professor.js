// cadastrar um aluno
let alunas = [];

function cadastrarAluna(nome) {
  alunas.push({ nome: nome, notas: [] });
}

cadastrarAluna('ju')
cadastrarAluna('thay')
cadastrarAluna('bete')
cadastrarAluna('erika')
cadastrarAluna('kat')



cadastrarNotas('kat', [10, 9, 8.5])

// cadastrar as notas
function cadastrarNotas(nome, notas) { // aluna: string / notas: array de numeros
  const aluna = alunas.find((aluna) => aluna.nome === nome);
  if (aluna) {
    // validar se todas a notas são numeros
    aluna.notas.push(...notas);
  } else {
    console.log('aluna não foi encontrada')
  }
}

console.log(alunas)

// calcular a média final do aluno
function calcularMedia(nomeAluno) {
  const aluno = alunas.find(aluno => aluno.nome === nomeAluno);
  if (aluno) {
    const notas = aluno.notas;
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    return soma / notas.length;
  } else {
    console.log("Aluna não encontrado.");
  }
}

// informar se aluno está aprovado ou não
function verificarAprovacao(nomeAluno) {
  const media = calcularMedia(nomeAluno);
  if (media >= 7) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}
// devolver lista de aprovados e reprovados



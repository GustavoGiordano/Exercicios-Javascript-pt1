/*33) Crie um programa que leia o nome e o turno (M ou V) de um aluno e exiba uma mensagem de saudação de acordo com o turno. Matutino: "Bom dia, aluno", Vespertino: "Boa tarde, aluno". */

const nome = prompt("Insira seu nome:")
const turno = prompt("Insira seu turno:\nM para matutino\nV para Vespertino").toUpperCase()

if (turno === "M") {
    alert("Bom dia, aluno")
} else if (turno === "V") {
    alert("Boa tarde, aluno")
} else {
alert("Resposta inválida.")
}

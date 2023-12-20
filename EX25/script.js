/*25) Faça um programa que leia o número de faltas de um aluno em uma disciplina e exiba sua situação. Se o número de faltas for maior que 15, ele é reprovado por falta. */

const faltas = parseInt(prompt("Insira o número de faltas do aluno: "))

if (faltas > 15) {
    alert("Status: Reprovado")
} else {
    alert("Status: Aprovado")
}

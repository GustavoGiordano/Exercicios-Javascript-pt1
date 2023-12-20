/*29) Escreva um programa que leia o nome e a nota de um aluno e exiba sua situação na disciplina. Se a nota for maior ou igual a 7, o aluno está aprovado. Caso contrário, está em recuperação. */

const nome = (prompt("Insira o nome do aluno(a): "))
const nota = parseFloat(prompt("Insira a nota: "))

if (nota >= 7) {
    alert("O aluno foi aprovado.")
} else {
    alert("O aluno está de recuperação.")
}

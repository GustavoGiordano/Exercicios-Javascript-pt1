/*19) Faça um programa que receba três notas de um aluno e exiba se ele foi aprovado ou reprovado. A média para aprovação é 7. */

const nota1 = parseFloat(prompt("Insira a 1ª nota: "))
const nota2 = parseFloat(prompt("Insira a 2ª nota: "))
const nota3 = parseFloat(prompt("Insira a 3ª nota: "))
const media = (nota1 + nota2 + nota3) / 3

if (media >= 7) {
    alert("A nota média do aluno é: " + media + "\nO aluno foi aprovado.")
} else {
    alert("A nota média do aluno é: " + media + "\nO aluno foi reprovado.")
}

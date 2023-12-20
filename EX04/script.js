/*4) Faça um programa que receba três notas de um aluno (cada nota de 0 a 10) e calcule a média ponderada considerando pesos 2, 3 e 5 para as notas, respectivamente. */

const nota = [
    parseFloat(prompt("Insira a 1ª nota: ")),
    parseFloat(prompt("Insira a 2ª nota: ")),
    parseFloat(prompt("Insira a 3ª nota: "))
]
let mediaPonderada = 0

if (nota[0] >= 0 && nota[0] <= 10 && nota[1] >= 0 && nota[1] <= 10 && nota[2] >= 0 && nota[2] <= 10) {
    mediaPonderada = ((nota[0] * 2 + nota[1] * 3 + nota[2] * 5) / (2 + 3 + 5))
}
alert("A média ponderada é de: " + mediaPonderada.toFixed(2))

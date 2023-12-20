/*28) Faça um programa que leia o peso e a altura de uma pessoa e exiba o seu Índice de Massa Corporal (IMC) e a sua classificação. Considere a tabela de classificação do IMC. */

const peso = parseFloat(prompt("Insira seu peso atual: "))
const altura = parseFloat(prompt("Insira sua altura: "))
const IMC = peso / (altura ** 2)

alert(`IMC = ${IMC.toFixed(2)}kg`)

if (IMC < 18.5) {
    alert("Baixo peso")
} else if (IMC >= 18.5 && IMC <= 24.9) {
    alert("Eutrofia (peso adequado)")
} else if (IMC >= 25 && IMC <= 29.9) {
    alert("Sobrepeso")
} else if (IMC >= 30.0 && IMC <= 34.9) {
    alert("Obesidade grau 1")
} else if (IMC >= 35 && IMC <= 39.9) {
    alert("Obesidade grau 2")
} else {
    alert("Obesidade extrema")
}

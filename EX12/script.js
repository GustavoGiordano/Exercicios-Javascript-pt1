/*12) Crie um programa que leia o peso e a altura de uma pessoa e exiba o seu Índice de Massa Corporal (IMC). */

const peso = parseFloat(prompt("Insira seu peso atual: "))
const altura = parseFloat(prompt("Insira sua altura: "))
const IMC = peso / (altura ** 2)


alert("Índice de massa corporal: " + IMC.toFixed(2))

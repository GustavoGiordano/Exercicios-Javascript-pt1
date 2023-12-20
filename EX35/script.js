/*35) Escreva um programa que leia três números inteiros e exiba a média aritmética. Se a média for maior ou igual a 7, exiba a mensagem "Aprovado", caso contrário, exiba a mensagem "Reprovado". */

const numero1 = parseFloat(prompt("Insira o 1º número: "))
const numero2 = parseFloat(prompt("Insira o 2º número: "))
const numero3 = parseFloat(prompt("Insira o 3º número: "))
const media = (numero1 + numero2 + numero3) / 3

if (media >= 7) {
    alert("Aprovado")
} else {
    alert("Reprovado")
}

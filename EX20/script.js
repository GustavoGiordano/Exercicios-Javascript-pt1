/*20) Escreva um programa que leia um número inteiro e exiba se ele é par ou ímpar. */

const numero = parseInt(prompt("Insira um número inteiro: "))

if (numero == 0) {
    alert("O número informado não é divisível.")
} else if (numero % 2 == 0) {
    alert("O número informado é par.")
} else {
    alert("O número informado é ímpar.")
}

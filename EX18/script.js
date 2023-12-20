/*18) Crie um programa que leia dois números inteiros e exiba o maior deles. */

let valor1 = parseFloat(prompt("Insira um valor: "))
let valor2 = parseFloat(prompt("Insira outro valor: "))
let maiorNumero

if (valor1 > valor2) {
    maiorNumero = valor1
} if (valor2 > valor1) {
    maiorNumero = valor2
}

alert("O maior dos números inseridos é: " + maiorNumero)

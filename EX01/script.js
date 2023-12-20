/*1) Faça um programa que solicite dois números inteiros e exiba a soma, subtração, multiplicação e divisão entre eles.*/

const numeros = [
    parseInt(prompt("Insira um número inteiro: ")),
    parseInt(prompt("Insira outro número inteiro: "))
]
const soma = numeros[0] + numeros[1]
const subtracao = numeros[0] - numeros[1]
const multiplicacao = numeros[0] * numeros[1]
const divisao = numeros[0] / numeros[1]
alert(
    "A soma dos dois números inteiros é: " + soma +
    "\nA subtração dos dois números inteiros é: " + subtracao +
    "\nA multiplicação dos dois números inteiros é: " + multiplicacao +
    "\nA divisão dos dois números inteiros é: " + divisao
)

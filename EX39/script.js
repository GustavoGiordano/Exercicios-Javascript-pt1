/*39) Faça um programa que leia 5 números inteiros usando o loop "while" e exiba a média aritmética dos valores lidos.*/

let contadora = 1
let numero = 0
let soma = 0

while (contadora <= 5) {
    numero = parseFloat(prompt("Insira um número"))
    soma += numero
    contadora += 1
}
const media = soma / 5

alert(`A média aritmética dos valores lidos é ${media}`)

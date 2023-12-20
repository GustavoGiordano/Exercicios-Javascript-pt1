/*13) Faça um programa que leia dois números inteiros e verifique se o primeiro é múltiplo do segundo. */

const n1 = parseInt(prompt("Insira um número inteiro: "))
const n2 = parseInt(prompt("Insira outro número inteiro: "))

if (n1 % n2 == 0) {
    alert("O primeiro número é múltiplo do segundo.")
}

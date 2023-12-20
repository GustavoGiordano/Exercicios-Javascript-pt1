/*8) Escreva um programa que leia dois números inteiros e troque os seus valores, ou seja, o primeiro deve ficar com o valor do segundo e vice-versa. */

let n1 = parseInt(prompt("Insira um número inteiro: "))
let n2 = parseInt(prompt("Insira outro número inteiro: "))
let acumuladora = 0

acumuladora = n1
n1 = n2
n2 = acumuladora

alert(n1 + " e " + n2)

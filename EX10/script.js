/*10) Faça um programa que leia um número inteiro e exiba a sua tabuada de multiplicação até o décimo valor. */

const numero =  parseInt(prompt("Insira um número: "))
let contadora = 1
let soma

alert("Tabuada de 1 a 10")

while (contadora < 11) {
    soma = numero * contadora
    alert(numero + " x " + contadora + " = " + soma )
    contadora += 1
}
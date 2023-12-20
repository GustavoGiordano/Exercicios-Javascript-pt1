/*40) Escreva um programa que leia um número inteiro e exiba a tabuada desse número até o décimo valor usando o loop "while". */

let numero = parseInt(prompt("Insira um número: "))
let contadora = 1

alert("Tabuada de 1 a 10")

while (contadora <= 10) {
    alert(`${numero} x ${contadora} = ${numero * contadora}`)
    contadora += 1
}

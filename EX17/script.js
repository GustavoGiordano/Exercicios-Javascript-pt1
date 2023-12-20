/*17) Escreva um programa que leia a idade de uma pessoa e exiba uma mensagem indicando se ela é criança, adolescente, adulto ou idoso.*/

const idade = parseInt(prompt("Insira a sua idade:"))

if (idade < 13) {
    alert("Você é uma criança.")
} else if (idade < 18) {
    alert("Você é um adolescente.")
} else if (idade < 60) {
    alert("Você é um adulto.")
} else {
    alert("Você é um idoso.")
}

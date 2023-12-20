/*32) Escreva um programa que leia a nota de um aluno em uma prova e exiba a sua conceituação conforme a tabela de notas.*/

const nota = parseFloat(prompt("Insira a nota do aluno: "))

if (nota >= 9.0 && nota <= 10.0) {
    alert("Ótimo (O)")
} else if (nota >= 8.0 && nota <= 8.9) {
    alert("Bom (B)")
} else if (nota >= 6.0 && nota <= 7.9) {
    alert("Regular (R)")
} else {
    alert("Insuficiente (I)")
}

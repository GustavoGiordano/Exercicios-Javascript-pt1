/*16) Faça um programa que verifique se um número é positivo, negativo ou zero. */

const valor = parseFloat(prompt("Insira um valor: "))

if (valor < 0) {
    alert("O número é negativo")
} else if (valor > 0) {
    alert("O número é positivo")
} else {
    alert("O número é igual a 0")
}

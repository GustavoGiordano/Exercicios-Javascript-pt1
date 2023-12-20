/*5) Escreva um programa que leia o preço de um produto e a quantidade comprada, e calcule o valor total a ser pago com desconto de 10% se a quantidade for maior que 10 unidades. */

const preco = parseFloat(prompt("Insira o preço do produto: "))
const quantidade = parseFloat(prompt("Insira a quantidade comprada do produto: "))

let total = preco * quantidade

if (quantidade > 10) {
    total -= total * 0.1
}

alert("O valor total a ser pago é: R$" + total.toFixed(2))

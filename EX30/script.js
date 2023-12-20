/*30) Crie um programa que leia o número de maçãs compradas e exiba o valor total a ser pago. O preço das maçãs é de R$ 0,50 cada se a quantidade for menor que 12 e R$ 0,40 cada se a quantidade for igual ou maior que 12.*/

const quantidadeMaca = parseInt(prompt("Insira o número de maçãs compradas: "))
let valorTotal = 0

if (quantidadeMaca >= 12) {
    valorTotal = quantidadeMaca * 0.40
} else {
    valorTotal = quantidadeMaca * 0.50
}

alert(`O valor total a ser pago será de R$${valorTotal.toFixed(2)}`)

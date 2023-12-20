/*7) Faça um programa que receba o salário base de um funcionário e calcule o seu salário líquido, considerando que o funcionário recebe 5% de comissão sobre o salário base. */

const salarioBase = parseFloat(prompt("Insira o salário base de um funcionário: "))
const salarioLiquido = salarioBase + salarioBase * 0.05

alert("O salário líquido do funcionário é: R$" + salarioLiquido.toFixed(2))

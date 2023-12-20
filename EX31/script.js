/*31) Faça um programa que leia o valor do salário-mínimo e o salário de um funcionário, e exiba quantos salários-mínimos ele recebe. */

const salarioMinimo = parseFloat(prompt("Insira o valor atual do salário-mínimo: "))
const salarioFuncionario = parseFloat(prompt("Insira o valor do salário do funcionário: "))
const quantidadeSalariosMinimos = salarioFuncionario / salarioMinimo

alert(`O funcionário recebe ${quantidadeSalariosMinimos} salários mínimos.`)
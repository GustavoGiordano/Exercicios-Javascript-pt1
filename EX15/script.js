/*15) Crie um programa que leia o salário de um funcionário e calcule o novo salário com um aumento de 15%. */

const salario = parseFloat(prompt("Insira o salário do funcionário:"));
const novoSalario = 15

const aumento = novoSalario / 100 * salario
const salarioFinal = salario + aumento

alert("O valor do novo salário será: R$" + salarioFinal);

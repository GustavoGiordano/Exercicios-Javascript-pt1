/*22) Faça um programa que receba o salário de um funcionário e exiba o valor do seu bônus. Se o salário for maior que R$ 2000, o bônus é de 10%, caso contrário, é de 5%. */

const salario = parseFloat(prompt("Insira o salário do funcionário"))
let bonus = 0

if (salario > 2000) {
    bonus = salario * 0.1
} else {
    bonus = salario * 0.05
}

alert("O bonus é de R$" + bonus.toFixed(2))

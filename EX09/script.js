/*9) Crie um programa que leia o valor do depósito mensal em uma poupança e a taxa de juros mensal, e calcule o montante após 12 meses. */

const depositoMensal = parseFloat(prompt("Insira o valor do depósito mensal: "));
const jurosMensal = parseFloat(prompt("Insira a taxa de juros mensal (em porcentagem): "));
const meses = 12;
let montante = 0;

for (let contadora = 1; contadora <= meses; contadora++) {
    montante += depositoMensal;
    montante += (montante * (jurosMensal / 100));
}

alert("O montante após 12 meses será de " + montante.toFixed(2));

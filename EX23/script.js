/*23) Escreva um programa que leia o nome de um mês e exiba a quantidade de dias que ele possui. Considere apenas meses válidos.*/

const meses = {
    janeiro: 31,
    fevereiro: 28,
    março: 31,
    abril: 30,
    maio: 31,
    junho: 30,
    julho: 31,
    agosto: 31,
    setembro: 30,
    outubro: 31,
    novembro: 30,
    dezembro: 31
}

const nomeMes = prompt("Insira o nome do mês:").toLowerCase()

if (meses[nomeMes]) {
    alert("O mês de " + nomeMes + " tem " + meses[nomeMes] + " dias.")
} else {
    alert("Mês inválido. Por favor, insira um mês válido.")
}

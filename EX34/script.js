/*34) Faça um programa que leia a idade de uma pessoa e exiba se ela pode ou não votar. O voto é obrigatório para pessoas entre 18 e 70 anos, e facultativo para pessoas entre 16 e 18 anos e com mais de 70 anos. */

const idade = parseInt(prompt("Insira sua idade:"))

if (idade >= 18 && idade <= 70) {
    alert("Voto obrigatório.")
} else if ((idade >= 16 && idade < 18) || idade > 70) {
    alert("Voto facultativo.")
} else {
    alert("Não pode votar.")
}

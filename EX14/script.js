/*14) Escreva um programa que leia a idade de uma pessoa em anos, meses e dias, e calcule quantos dias de vida ela tem.*/

const anos = parseInt(prompt("Digite a idade em anos:"));
const meses = parseInt(prompt("Digite a idade em meses:"));
const dias = parseInt(prompt("Digite a idade em dias:"));

const idadeEmDias = (anos * 365) + (meses * 30) + dias;

alert("A idade em dias é: " + idadeEmDias);

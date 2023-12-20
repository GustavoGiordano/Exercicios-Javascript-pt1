/*26) Escreva um programa que leia o código de um produto e a quantidade comprada, e exiba o valor total a ser pago. Considere que cada produto tem um preço diferente. */

const preco = {
    1: 10.00,
    2: 20.00,
    3: 30.00,
    4: 40.00,
    5: 50.00,
    6: 60.00,
    7: 70.00,
    8: 80.00,
    9: 90.00,
    10: 100.00,
};

const codigo = parseInt(prompt("Insira o código do produto: "));
const quantidade = parseInt(prompt("Insira a quantidade comprada do produto: "));
let valor;

if (preco[codigo]) {
    valor = preco[codigo] * quantidade;
    alert(`O valor total a ser pago é: R$ ${valor.toFixed(2)}`);
} else {
    alert("Código de produto inválido. Por favor, insira um código válido.");
}

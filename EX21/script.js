/*21) Crie um programa que leia a idade de um grupo de pessoas e exiba quantas são menores de idade e quantas são maiores de idade. */

const totalPessoas = parseInt(prompt("Insira o número total de pessoas:"))
let menoresIdade = 0
let maioresIdade = 0

for (let contadora = 0; contadora < totalPessoas; contadora++) {
    const idade = parseInt(prompt("Insira a idade da pessoa " + (contadora + 1) + ":"))
    
    if (idade < 18) {
        menoresIdade++
    } else {
        maioresIdade++
    }
}

alert("Número de pessoas menores de idade: " + menoresIdade)
alert("Número de pessoas maiores de idade: " + maioresIdade)

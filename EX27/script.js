/*27) Crie um programa que leia a idade de uma pessoa e seu sexo (M ou F) e exiba uma mensagem indicando se ela pode ou não se aposentar. Homens podem se aposentar com 65 anos ou mais, e mulheres com 60 anos ou mais. */

const idade = parseInt(prompt("Insira sua idade"))
const sexo = prompt("Insira seu sexo (M ou F)").toUpperCase()

if ((sexo === "M" && idade >= 65) || (sexo === "F" && idade >= 60)) {
    alert("Pode se aposentar")
} else {
    alert("Não pode se aposentar")
}

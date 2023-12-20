/*3) Crie um programa que leia a base e a altura de um triângulo e calcule sua área. */

const triangulo = {
    base: parseFloat(prompt("Insira a base do triângulo: ")),
    altura: parseFloat(prompt("Insira a altura do triângulo: "))
}

triangulo.area = ((triangulo.base * triangulo.altura) / 2)

alert("A área do triângulo é de: " + triangulo.area.toFixed(2))

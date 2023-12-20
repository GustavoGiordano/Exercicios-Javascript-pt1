/*2) Escreva um programa que leia o raio de um círculo e calcule sua área e perímetro. */

const circulo = {
    raio: parseFloat(prompt("Insira o raio do círculo: "))
}

circulo.area = (Math.PI * (circulo.raio ** 2))
circulo.perimetro = (2 * Math.PI * circulo.raio)

alert("A área do círculo é de: " + circulo.area.toFixed(2) + "\nO perímetro do círculo é de: " + circulo.perimetro.toFixed(2))

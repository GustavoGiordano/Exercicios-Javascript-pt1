/*24) Crie um programa que leia três números inteiros e exiba-os em ordem crescente. */

const A = parseInt(prompt("Insira um número inteiro: "))
const B = parseInt(prompt("Insira outro número inteiro: "))
const C = parseInt(prompt("Insira outro número inteiro: "))

let n1, n2, n3

if (A <= B && A <= C) {
    n1 = A
    if (B <= C) {
        n2 = B
        n3 = C
    } else {
        n2 = C
        n3 = B
    }
} else if (B <= A && B <= C) {
    n1 = B
    if (A <= C) {
        n2 = A
        n3 = C
    } else {
        n2 = C
        n3 = A
    }
} else {
    n1 = C
    if (A <= B) {
        n2 = A
        n3 = B
    } else {
        n2 = B
        n3 = A
    }
}
alert(`Números em ordem crescente: ${n1}, ${n2}, ${n3}`);

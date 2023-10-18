let score1 = Number(prompt("Digite o primeira número:"));
let score2 = Number(prompt("Digite o segundo número:"));
if (score1 + (score2 % 2) == 0) {
  alert("A soma dos dois números é par");
} else {
  alert("A soma dos dois números é impar");
}

if (score1 == score2) {
  alert("os dois números inseridos são iguais");
} else {
  alert("os dois números inseridos são diferentes");
}

alert("A soma dos dois números: " +(score1 + score2 ));
alert("A subtração dos dois números: " + (score1 - score2));
alert("A multiplicação dos dois números: " + (score1 * score2));
alert("A divisão dos dois números: " + (score1 / score2));
alert("O resto da divisão dos dois números: " (+ score1 % score2));



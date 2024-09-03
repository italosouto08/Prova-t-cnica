//2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
//
//IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

function fibonacci(n) {
  let fibSequence = [0, 1];

  for (let i = 2; i < n; i++) {
    fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
  }

  return fibSequence;
}

function pertenceAFibonacci(numero) {
  const limite = 20;
  const sequencia = fibonacci(limite);

  if (sequencia.includes(numero)) {
    return `O número ${numero} pertence à sequência de Fibonacci.`;
  } else {
    return `O número ${numero} não pertence à sequência de Fibonacci.`;
  }
}

const numeroInformado = 21;
console.log(pertenceAFibonacci(numeroInformado));

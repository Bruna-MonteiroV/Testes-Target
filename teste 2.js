// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma
//dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na 
//linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma 
//mensagem avisando se o número informado pertence ou não a sequência.

function fibonacci(num) {
     let x = 0;
    let y = 1;

    // Se o número começa com 0 ou 1, pertence a sequência Fibonacci

    if (num === 0 || num === 1) {
        return ('O número pertence a sequência Fibonacci');
    }
// Para os próximos números da sequência

let proximoNumero = x + y;

while (proximoNumero <= num) {
    if (proximoNumero === num) {
        return ('O número pertence a sequência de Fibonacci');
    }
    // o novo número será a soma dos dois anteriores
    x = y;
    y = proximoNumero;
    proximoNumero = x + y;
}
    return (`O número ${num} não é da sequência de Fibonacci.`);
}
    //teste de número
    let num = 34; 
    console.log(fibonacci(num));



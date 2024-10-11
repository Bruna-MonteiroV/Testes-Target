//1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
let indice = 13;
let soma = 0;
let k = 0;
//Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
while (k < indice) {
    k = k +1; 
    soma = soma + k
}
//Imprimir(SOMA)
console.log(soma);
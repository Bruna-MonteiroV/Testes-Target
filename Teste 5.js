let string = ('Bruna');
let stringrevertida = "";

for (let i = string.length - 1; i >=0; i--) {
    // para adicionar caracteres a string invertida
    stringrevertida += string [i];
}

console.log ('String original:' + string);
console.log ('String Invertida:' + stringrevertida)
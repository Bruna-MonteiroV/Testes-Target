//  Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
//• SP – R$67.836,43
//• RJ – R$36.678,66
//• MG – R$29.229,88
//• ES – R$27.165,48
//• Outros – R$19.849,53

let sp = 67836.43;
let rj = 36678.66;
let mg = 29229.88;
let es = 27165.38;
let outros = 19849.53;

let faturamentoTotal = sp + rj + mg + es + outros;

// Para saber o percentual de faturamento de cada estado

let percentualSp = (sp/total) * 100;
let percentualRj = (rj/total) * 100;
let percentualMg = (mg/total) * 100;
let percentualEs = (es/total) * 100;
let percentualOutros = (outros/total) * 100;

console.log('Percentual de representação por estado:');
console.log("SP:" + percentualSp + "%" );
console.log("RJ:" + percentualRj + "%" );
console.log("MG:" + percentualMg + "%" );
console.log("ES:" + percentualEs + "%" );
console.log("Outros:" + percentualOutros + "%" );
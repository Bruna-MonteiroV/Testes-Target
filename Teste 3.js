//Calcular as estáticas do faturamento
function calculeEstatistica(faturamento) {
    let baixoFaturamento = null;
    let maiorFaturamento = null;
    let somafaturamento = 0;
    let diasDeFaturamento = 0;
    let diasSemFaturamento = 0;
    let diasAcimaMediaFaturamento = 0;

    for (let a = 0; a < faturamento.length; a++) {
        let valor = faturamento[a].valor; // Para obter o valor do dia 

        if (valor >0){
            if (baixoFaturamento === null || valor < baixoFaturamento){
                baixoFaturamento = valor
            }
            if (maiorFaturamento === null || valor > maiorFaturamento){
                maiorFaturamento = valor;
            }
            somaFaturamento += valor; 
            diasDeFaturamento++;
        }

    }
    let mediaFaturament0 = somafaturamento / diasDeFaturamento;
    
    for (let a = 0; a <faturamento.length; a++) {
        let valor = faturamento[a].valor;

        if (valor > 0 && valor > mediaFaturament0){
            diasAcimaMediaFaturamento++;
        }
    }
return {
    baixoFaturamento,
    maiorFaturamento,
    mediaFaturament0,
    diasAcimaMediaFaturamento
};
fetch ('c:\Users\user\Desktop\Teste Estágio Target\dadosJSON.json)
    then (function(response) {
        return response.json(); 
    })
    then (function(data)) {
        const estatisticas = calculeEstatistica(data.faturamento);

        console.log ("O menor valor de faturamento é de:" + baixoFaturamento);
        console.log ('O maior valor de faturamento é de:' + maiorFaturamento);
        console.log ('A média de faturamento é de:' + mediaFaturament0);
        console.log ('O número de dias com faturamento acima da média é de:' + diasAcimaMediaFaturamento);
    }
$(document).ready(function(){ // inicia o código apenas depois do código ser carregado;
    const caminhoCirculoA = document.querySelector("div#circuloA")
    const caminhoCirculoB = document.querySelector("div#circuloB");
    const caminhoCirculoC = document.querySelector("div#circuloC");
    const caminhoCirculoD = document.querySelector("div#circuloD");

    const arrayCaminhos = [caminhoCirculoA,caminhoCirculoB,caminhoCirculoC,caminhoCirculoD]; 
    const arrayConfigs = [];
    const array_valores = [3,8,2,1]; 
    var duracao = 1400   
    arrayCaminhos.map((caminhoDom,i)=>{
        const configuracoes = new ProgressBar.Circle(caminhoDom, {
            color:'#d82828',
            strokeWidth:8,
            duration:duracao,
            from:{color:'#737373'},
            to:{color:'#d82828'},
            step:(state,circulo)=>{
                circulo.path.setAttribute('stroke',state.color);
                var valor_circulo = Math.round(circulo.value()*array_valores[i]);
                circulo.setText(valor_circulo);
            },
        });
        configuracoes.animate(1.0)
        duracao += 200;
    });
});
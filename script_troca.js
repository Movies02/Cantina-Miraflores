document.addEventListener('DOMContentLoaded', function() {
    var div_esquerda = document.getElementById('cantina2');
    var div_direita = document.getElementById('cantina1');
    var div_meio = document.getElementById('cantina3');


    async function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function durme() {
        await sleep(5000);
        console.log('Já passaram 5s');
        var div_esquerda_v = div_esquerda.src;
        var div_direita_v = div_direita.src;
        var div_meio_v = div_meio.src;
        
        div_esquerda.src = div_direita_v;
        div_direita.src = div_meio_v;
        div_meio.src = div_esquerda_v;

        durme();
    }

    durme();
});
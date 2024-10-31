
function mover(tipo){
    document.getElementById(tipo).scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('FastFood').addEventListener('click',function(){
    mover("titulo_f")
})

document.getElementById('bebida').addEventListener('click',function(){
    mover("titulo_b")
})

document.getElementById('refeicao').addEventListener('click',function(){
    mover("titulo_r")
})


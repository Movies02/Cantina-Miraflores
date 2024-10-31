

document.getElementById('hamburger_').addEventListener('click',function(){
    const temas=document.getElementById('temas')
    temas.style.display='block'
    this.style.display='none'
})

document.getElementById('hamburger').addEventListener('click',function(){
    const hamburg=document.getElementById('hamburger_')
    hamburg.style.display='block'
    const temas=document.getElementById('temas')
    temas.style.display='none'
})
/*
function trocou(casa1,casa2){
    casa1.style.display='none'
    casa2.style.display='block'
}
*/







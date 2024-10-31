document.addEventListener('DOMContentLoaded',async function(){
    var res=await fetch('http://localhost:3000/cantina_dados')
    var resultado=await res.json()
    var dados=JSON.parse(resultado)
    console.log(dados[0].nome_produto)

    var letra=(dados).length-1

    var div=document.getElementById('produtos_f')
    var div_2=document.getElementById('produtos_b')
    var div_3=document.getElementById('produtos_r')

    while(letra+1>0){
        var dd=dados[letra]

        var nome_p=dd.nome_produto
        var preco=dd.preco
        var tipo=dd.tipo
        var quantidade=dd.quantidade
        var disponivel=dd.disponivel

        var np=document.createElement('div')
        np.id='div_nome_p'
        np.className='divs_pro'
        np.innerText=nome_p
        if(String(disponivel).toLowerCase()=="nao" || String(disponivel).toLowerCase()=="não"){
            np.innerHTML=`(<del>${nome_p}</del>)`
        }

        var pc=document.createElement('div')
        pc.id='div_preco'
        pc.className='divs_pro'
        pc.innerHTML=`${preco}$$`

        var qd=document.createElement('div')
        qd.id='div_qua'
        qd.className='divs_pro'
        qd.innerText=quantidade


        var valor=document.createElement('div')
        valor.id="valor"
        valor.style.display='inline-block'
        valor.style.minWidth='10%'
        valor.style.marginRight='50px'
        valor.appendChild(np)
        valor.appendChild(pc)
        valor.appendChild(qd)

        if(String(tipo).toLowerCase()=="fastfood"){
            div.appendChild(valor)
        }
        else if(String(tipo).toLowerCase()=="bebida"){
            div_2.appendChild(valor)
        }
        else if(String(tipo).toLowerCase()=="refeição" || String(tipo).toLowerCase()=="refeiçao" || String(tipo).toLowerCase()=="refeicão"){
            div_3.appendChild(valor)
        }


        console.log(disponivel)




        letra-=1
    }
})
let contraste = 0
function Contraste(){
    if (contraste == 0){
        contraste=1
        document.getElementById('header').style.backgroundColor = 'black'
        document.getElementById('titulo').style.color = 'white'
        document.getElementById('link').style.color = 'white'
        document.getElementById('link1').style.color = 'white'
        document.getElementById('link2').style.color = 'white'
        document.getElementById('body').style.backgroundColor = 'black'
        document.getElementById('body').style.color = 'white'
        document.getElementById('contraste').style.backgroundColor = 'white'
        document.getElementById('aumentarfonte').style.backgroundColor = 'white'
        document.getElementById('diminuirfonte').style.backgroundColor = 'white'
        document.getElementById('footer').style.backgroundColor = 'black'
        document.getElementById('pergunta').style.color = 'white'
        document.getElementById('dicas').style.color = 'white'
        document.getElementById('leidecotas1').style.color = 'white'
        document.getElementById('saibamais').style.backgroundColor = 'black'
        document.getElementById('saibamais').style.border = 'solid'
        document.getElementById('botaoartigos').style.backgroundColor = 'black'
        document.getElementById('botaoartigos').style.border = 'solid'
    }
    else{
        contraste=0
        document.getElementById('header').style.backgroundColor = 'white'
        document.getElementById('body').style.backgroundColor = 'white'
        document.getElementById('titulo').style.color = 'black'
        document.getElementById('link').style.color = 'black'
        document.getElementById('link1').style.color = 'black'
        document.getElementById('link2').style.color = 'black'
        document.getElementById('body').style.color = 'black'
        document.getElementById('footer').style.backgroundColor = '#577272'
        document.getElementById('pergunta').style.color = '#409d9d'
        document.getElementById('dicas').style.color = '#409d9d'
        document.getElementById('leidecotas1').style.color = '#409d9d'
        document.getElementById('saibamais').style.backgroundColor = '#409d9d'
        document.getElementById('saibamais').style.border = 'none'
        document.getElementById('botaoartigos').style.backgroundColor = '#409d9d'
        document.getElementById('botaoartigos').style.border = 'none'
    }
}

let tamanhotitulo = 32
let tamanholink = 18
let tamanholeidecotas = 23
let tamanholorem = 16
let tamanhosaibamais = 19
let tamanhopli = 12
function Aumentar(){
    tamanhotitulo+=1
    tamanholink+=1
    tamanholeidecotas+=1
    tamanholorem+=1
    tamanhosaibamais+=1
    tamanhopli+=1
    document.getElementById('titulo').style.fontSize = tamanhotitulo + "pt";
    document.getElementById('link').style.fontSize = tamanholink + "pt";
    document.getElementById('link1').style.fontSize = tamanholink + "pt";
    document.getElementById('link2').style.fontSize = tamanholink + "pt";
    document.getElementById('pergunta').style.fontSize = tamanhotitulo + "pt";
    document.getElementById('leidecotas').style.fontSize = tamanholeidecotas + "pt";
    document.getElementById('lorem').style.fontSize = tamanholorem + "pt";
    document.getElementById('saibamais').style.fontSize = tamanhosaibamais + "pt";
    document.getElementById('dicas').style.fontSize = tamanhotitulo + "pt";
    document.getElementById('li').style.fontSize = tamanholorem + "pt";
    document.getElementById('li1').style.fontSize = tamanholorem + "pt";
    document.getElementById('li2').style.fontSize = tamanholorem + "pt";
    document.getElementById('li3').style.fontSize = tamanholorem + "pt";
    document.getElementById('li4').style.fontSize = tamanholorem + "pt";
    document.getElementById('li5').style.fontSize = tamanholorem + "pt";
    document.getElementById('li6').style.fontSize = tamanholorem + "pt";
    document.getElementById('li7').style.fontSize = tamanholorem + "pt";
    document.getElementById('pli').style.fontSize = tamanhopli + "pt";
    document.getElementById('pli1').style.fontSize = tamanhopli + "pt";
    document.getElementById('pli2').style.fontSize = tamanhopli + "pt";
    document.getElementById('pli3').style.fontSize = tamanhopli + "pt";
    document.getElementById('pli4').style.fontSize = tamanhopli + "pt";
    document.getElementById('pli5').style.fontSize = tamanhopli + "pt";
    document.getElementById('pli6').style.fontSize = tamanhopli + "pt";
    document.getElementById('pli7').style.fontSize = tamanhopli + "pt";
    document.getElementById('leidecotas1').style.fontSize = tamanhotitulo + "pt";
    document.getElementById('txtlei').style.fontSize = tamanholorem + "pt";
    document.getElementById('botaoartigos').style.fontSize = tamanhosaibamais + "pt";
}

function Diminuir(){
    tamanhotitulo-=1
    tamanholink-=1
    tamanholeidecotas-=1
    tamanholorem-=1
    tamanhosaibamais-=1
    tamanhopli-=1
    document.getElementById('titulo').style.fontSize = tamanhotitulo + "pt";
    document.getElementById('link').style.fontSize = tamanholink + "pt";
    document.getElementById('link1').style.fontSize = tamanholink + "pt";
    document.getElementById('link2').style.fontSize = tamanholink + "pt";
    document.getElementById('pergunta').style.fontSize = tamanhotitulo + "pt";
    document.getElementById('leidecotas').style.fontSize = tamanholeidecotas + "pt";
    document.getElementById('lorem').style.fontSize = tamanholorem + "pt";
    document.getElementById('saibamais').style.fontSize = tamanhosaibamais + "pt";
    document.getElementById('dicas').style.fontSize = tamanhotitulo + "pt";
    document.getElementById('li').style.fontSize = tamanholorem + "pt";
    document.getElementById('li1').style.fontSize = tamanholorem + "pt";
    document.getElementById('li2').style.fontSize = tamanholorem + "pt";
    document.getElementById('li3').style.fontSize = tamanholorem + "pt";
    document.getElementById('li4').style.fontSize = tamanholorem + "pt";
    document.getElementById('li5').style.fontSize = tamanholorem + "pt";
    document.getElementById('li6').style.fontSize = tamanholorem + "pt";
    document.getElementById('li7').style.fontSize = tamanholorem + "pt";
    document.getElementById('pli').style.fontSize = tamanhopli + "pt";
    document.getElementById('pli1').style.fontSize = tamanhopli + "pt";
    document.getElementById('pli2').style.fontSize = tamanhopli + "pt";
    document.getElementById('pli3').style.fontSize = tamanhopli + "pt";
    document.getElementById('pli4').style.fontSize = tamanhopli + "pt";
    document.getElementById('pli5').style.fontSize = tamanhopli + "pt";
    document.getElementById('pli6').style.fontSize = tamanhopli + "pt";
    document.getElementById('pli7').style.fontSize = tamanhopli + "pt";
    document.getElementById('leidecotas1').style.fontSize = tamanhotitulo + "pt";
    document.getElementById('txtlei').style.fontSize = tamanholorem + "pt";
    document.getElementById('botaoartigos').style.fontSize = tamanhosaibamais + "pt";
}
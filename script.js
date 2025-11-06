//Seleciona as luses

const luzVermelho = document.getElementById("Vermelho");
const luzAmarela = document.getElementById("Amarela");
const luzVerde = document.getElementById("Verde");

//Botoes

const btnvermelho = document.getElementById("btnvermelho");
const btnamarelo = document.getElementById("btnamarelo");
const btnverde = document.getElementById("btnverde");
const btnAuto = document.getElementById("btnAuto");
const btnStop = document.getElementById("btnStop");

// variavel modo altomatico

let intervalo;

function limpar(){
    luzVermelha.className = 'luz';
    luzAmarela.className = 'luz';
    luzVerde.className = 'luz';
}

function acenderVermelho(){
    limpar();
    luzVermelha.classList.add("acesa", "vermelha");
}

function acenderAmarelo(){
    limpar()
    luzAmarela.classList.add("acesa", "amarelo");

}
function acenderVerde(){
    limpar()
    luzVermelho.classList.add("acesa", "verde");

}
 function modoaltomatico(){
    limpar();
    let estado = 0;
    intervalo = setInterval(()=>{
        if(estado === 0 ) acenderVermelho();
        if(estado === 1 ) acenderAmarelo();
        if(estado === 2 ) acenderVerde();
        estado = (estado + 1) % 3;
     }, 1000)
 }
 function stop(){
    clearInterval(intervalo);
    limpar();
 }

 btnStop.onclick = stop;

function vermelho(){
    clearInterval(intervalo);
    limpar();

}

btnvermelho.onclick = luzvermelho;

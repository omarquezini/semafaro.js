//Seleciona as luses

const luzVermelha = document.getElementById("Vermelho");
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
    luzAmarela.classList.add("acesa", "amarela");

}
function acenderVerde(){
    limpar()
    luzVermelho.classList.add("acesa", "verde");

}

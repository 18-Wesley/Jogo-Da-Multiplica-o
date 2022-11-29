const valor_1 = Math.ceil(Math.random() * 10)
const valor_2 = Math.ceil(Math.random() * 10)

const questaoEl = document.getElementById("questao")

let formEl = document.getElementById('form')

questaoEl.innerText = `Quanto é ${valor_1} x ${valor_2}? `

const respostaCorreta = valor_1 * valor_2

let inputEl = document.getElementById('input')
let score = JSON.parse(localStorage.getItem("score"))

if(!score){
    score = 0
   
}

let pontos = document.getElementById('pontos')
pontos.innerHTML = `pontos: ${score}`
if(score< 0){
    pontos.style.color = "red"
}


function ativo (){
    formEl.addEventListener(
    "submit", ()=> {
        let resposta = +inputEl.value
        if(resposta === respostaCorreta){
            score ++
            armazenarLocalStorage()
    
        }else{
            score--
            armazenarLocalStorage()
        }
    })
}

function armazenarLocalStorage (){
    localStorage.setItem("score", JSON.stringify(score) )
}

function voltarPagina (){
    window.location.href = "inicio.html"

}


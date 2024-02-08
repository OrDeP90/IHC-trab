//trocar pela tela correta

import React from "react";
import dana from "../images/dana.png"
import "./styles/Global.css"

const Confirmacao = () => {
return (    
    <div class = "grid-container center">
        <div class = "grid-container-item item-1">
        <img src = {dana} alt = "dana-triste"></img>
        </div>
        <div class = "grid-container-item item-2">
        <h1>Você está triste?</h1>
        <div class = "opcoes">
        <a class = "opt-button left" href="/feliz">Sim</a>
        <a class = "opt-button right" href="/selecao">Não</a>
        </div>
        </div>
    </div>
    )
}

export default Confirmacao;
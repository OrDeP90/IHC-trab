import React from "react";
import tristeDana from "./images/triste-dana.png"
import felizDana from "./images/feliz-dana.png"
import raivaDana from "./images/raiva-dana.png"
import tedioDana from "./images/tedio-dana.png"
import "./styles/Global.css"
import { useLocation } from 'react-router-dom';

const Confirmacao_raiva = () => {
    let image = tristeDana
    let emocao = "triste"
    const props = "Angry"
    if(props === "Happy") {
        image = felizDana
        emocao = "Feliz"
    }
    else if(props === "Angry") {
        image = raivaDana
        emocao = "com raiva"
    }
    else if(props === "Neutral") {
        image = tedioDana
        emocao = "com tédio"
    }
    else if(props === "Surprise") 
        emocao = "ansioso"
return (    
    <div class = "grid-container center">
        <div class = "grid-container-item item-1">
        <img src = {image} alt = "dana-triste"></img>
        </div>
        <div class = "grid-container-item item-2">
        <h1>Você está {emocao}?</h1>
        <div class = "opcoes">
        <a class = "opt-button left" href={"/sintomuito"}>Sim</a>
        <a class = "opt-button right" href="/selecao">Não</a>
        </div>
        </div>
    </div>
    )
}

export default Confirmacao_raiva;
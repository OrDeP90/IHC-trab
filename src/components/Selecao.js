import React, { useState } from "react";
import "./styles/Global.css"
import thinkingPana from "./images/pana-thinking.png"
import arrow from "./images/BsArrowRight.png"

const Selecao = () => {
    const [selectedEmotion, setSelectedEmotion] = useState('')
    const handleOptionChange = ('onClick', event => {
        setSelectedEmotion(event.target.value)
    })
    return (
        <div class = "grid-container questionario1 center">
            <h1 class = "header">Qual emocao melhor te descreve agora?</h1>
            <div class = "image-words">
                <div class = "image-words item images">
                    <img src = {thinkingPana}></img>
                </div>
                <div class = "image-words item words" id = "selecao">
                    <div class = "opcoes-palavras">
                        <form action = "#">
                            <div class = "emocoes-row">
                                <input type = "radio" id = "raiva-id" class = "emocao-radio" 
                                name = "emocao" value = "raiva" checked = {selectedEmotion === 'raiva'} onChange = {handleOptionChange}/>
                                    <label for = "raiva-id" class = "emocao-label">Com raiva</label>
                                <input type = "radio" id = "triste-id" class = "emocao-radio" 
                                name = "emocao" value = "triste" checked = {selectedEmotion === 'triste'} onChange = {handleOptionChange}/>
                                    <label for = "triste-id" class = "emocao-label">Triste</label>
                                <input type = "radio" id = "entediado" class = "emocao-radio" 
                                name = "emocao" value = "entediado" checked = {selectedEmotion === 'entediado'} onChange = {handleOptionChange}/>
                                    <label for = "entediado" class = "emocao-label">Entediado</label>
                            </div>
                            <div class = "emocoes-row">
                                <input type = "radio" id = "ansioso-id" class = "emocao-radio" 
                                name = "emocao" value = "ansioso" checked = {selectedEmotion === 'ansioso'} onChange = {handleOptionChange}/>
                                    <label for = "ansioso-id" class = "emocao-label">Ansioso</label>
                                <input type = "radio" id = "feliz-id" class = "emocao-radio" 
                                name = "emocao" value = "feliz" checked = {selectedEmotion === 'feliz'} onChange = {handleOptionChange}/>
                                    <label for = "feliz-id" class = "emocao-label">Feliz</label>
                                <div class = "enviar">
                                    <a href = {`/${selectedEmotion}`} class = "arrow-button"><img src = {arrow}/></a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Selecao;
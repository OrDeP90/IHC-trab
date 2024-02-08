import React from "react";
import "./styles/Global.css"
import thinkingPana from "./images/pana-thinking.png"
import arrow from "./images/BsArrowRight.png"

const Questionario1 = (props) => {
    let formValues = []
    if(props.emocao === "triste") {
        formValues = ["Preocupado", "Luto", "Cansado", "Deprimido", "Estressado", "Ansioso", "Solidão", "Frustrado"]
    }
    else if(props.emocao === "raiva") {
        formValues = ["Preocupado", "Irritado", "Cansado", "Decepcionado", "Estressado", "Ansioso", "Solidão", "Frustrado"]
    }
    else if(props.emocao === "alegre") {
        return
    }
    else if(props.emocao === "ansioso") {
        formValues = ["Preocupado", "Inquietação", "Isolamento", "Deprimido", "Apreensivo", "Agonia", "Impotência", "Frustrado"]
    }
    else {
        formValues = ["Preocupado", "Desmotivado", "Cansado", "Deprimido", "Estressado", "Dependência", "Solidão", "Monótono"]
    }
    return (
        <div class = "center">
            <div class = "grid-container questionario1">
                <h1 class = "header">Quais palavras melhor te descrevem agora?</h1>
                <div class = "image-words">
                    <div class = "image-words item images">
                        <img src = {thinkingPana}></img>
                    </div>
                    <div class = "image-words item words">
                        <div class = "opcoes-palavras">
                            <form action = "#">
                                <div class = "emocoes-row">
                                    <input type = "checkbox" id = {formValues[0]} class = "emocao-checkbox" />
                                        <label for = {formValues[0]} class = "emocao-label">{formValues[0]}</label>
                                    <input type = "checkbox" id = {formValues[1]} class = "emocao-checkbox" />
                                        <label for = {formValues[1]} class = "emocao-label">{formValues[1]}</label>
                                    <input type = "checkbox" id = {formValues[2]} class = "emocao-checkbox" />
                                        <label for = {formValues[2]} class = "emocao-label">{formValues[2]}</label>
                                </div>
                                <div class = "emocoes-row">
                                    <input type = "checkbox" id = {formValues[3]} class = "emocao-checkbox" />
                                        <label for = {formValues[3]} class = "emocao-label">{formValues[3]}</label>
                                    <input type = "checkbox" id = {formValues[4]} class = "emocao-checkbox" />
                                        <label for = {formValues[4]} class = "emocao-label">{formValues[4]}</label>
                                    <input type = "checkbox" id = {formValues[5]} class = "emocao-checkbox" />
                                        <label for = {formValues[5]} class = "emocao-label">{formValues[5]}</label>
                                </div>
                                <div class = "emocoes-row">
                                    <input type = "checkbox" id = {formValues[6]} class = "emocao-checkbox" />
                                        <label for = {formValues[6]} class = "emocao-label">{formValues[6]}</label>
                                    <input type = "checkbox" id = {formValues[7]} class = "emocao-checkbox" />
                                        <label for = {formValues[7]} class = "emocao-label">{formValues[7]}</label>
                                    <div class = "enviar">
                                        <a href = "/sintomuito" class = "arrow-button"><img src = {arrow}/></a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Questionario1
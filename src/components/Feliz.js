import React, {useState,useEffect} from "react";
import felizDana from "./images/tela-feliz.png";
import { Navigate, useNavigate } from "react-router-dom";
import "./styles/Global.css";

const Feliz = () => {

  const navigate = useNavigate();
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    // Define um temporizador para redirecionar após 3 segundos
    const timer = setTimeout(() => {
      // Define o estado para redirecionar após 3 segundos
      setRedirect(true);
    }, 3000);

    // Limpa o temporizador ao desmontar o componente
    return () => clearTimeout(timer);
  }, []); // Este efeito será executado apenas uma vez após a montagem do componente

  useEffect(() => {
    // Se o estado de redirecionamento for verdadeiro, redirecione para outra página
    if (redirect) {
      navigate('/solucao2');
    }
  }, [redirect, navigate]);


    return (
        <div class = "grid-container center">
            <div class = "grid-container-item item-1">
            <img src = {felizDana} alt = "dana-triste"></img>
            </div>
            <div class = "grid-container-item item-2">
            <h1>Que bom que você está se sentindo assim!</h1>
            </div>
        </div>
    )
}

export default Feliz
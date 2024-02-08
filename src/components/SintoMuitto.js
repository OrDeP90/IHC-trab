import React,{useEffect,useState} from "react";
import sorryPana from "./images/sorry-pana.png";
import { Navigate, useNavigate } from "react-router-dom";
import "./styles/Global.css";




const SintoMuitto = () => {    
    
      const navigate = useNavigate();
      const [redirect, setRedirect] = useState(false);
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setRedirect(true);
        }, 3000);
    
        return () => clearTimeout(timer);
      }, []);
    
      useEffect(() => {
        if (redirect) {
          navigate('/sintomuittofinal');
        }
      }, [redirect, navigate]);
    

    return (
        <div class = "grid-container center">
            <div class = "grid-container-item item-1">
            <img src = {sorryPana} alt = "dana-triste"></img>
            </div>
            <div class = "grid-container-item item-2">
            <h1 class = "sinto-muito-text">Eu sinto muito que você esteja passando por isso</h1>
            </div>
        </div>
    )
}

export default SintoMuitto
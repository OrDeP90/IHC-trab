import React from 'react';
import Imagem from './Imagem.js';
import './styles/style.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import danapensando from "./dana-pensando.png"
import containersolucao from "./container-solucao.png"
const Sintomuitofinal = () => {

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
      navigate('/solucao2');
    }
  }, [redirect, navigate]);

  return (
    <div>
      <Imagem imagem={danapensando} position='absolute' height="548px" width= "548px" top="42px" left="366px"/>
      <Imagem imagem={containersolucao} position='absolute' height="186px" width= "1100px" top="553px" left="90px"/>
    </div>
  );
};

export default Sintomuitofinal;
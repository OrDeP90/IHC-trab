import React from 'react';
import Imagem from './Imagem.js';
import Button from './Button.js';
import { Link } from 'react-router-dom';
import './styles/style.css';

const Page1 = () => {
  return (
    <div className = "App">   
      <h1 class = "anna">OLÁ, EU SOU A</h1>
      <h2 class = "anna">CLÁUDIA</h2>
      <h3 class = "anna">A ROBÔ DO DC</h3>

      <Imagem imagem="dana.png" position='absolute' height="816.09px" width= "846.79px" top="50px" left="499px"/>
      
      <Imagem imagem="container.png" position='absolute' height="227px" width= "912px" top="512px" left="43px"/>

      <p>Sou a robô de identificação de emoções que te ajuda a lidar com elas</p>

      <Link to="/page2">
        <Button
          className = "round-button"imageUrl="Button1.png"
        />
        <Button 
          className = "arrow-image" imageUrl = "BsArrowRight.png"
        />
      </Link>

    </div>  
  );
};

export default Page1;
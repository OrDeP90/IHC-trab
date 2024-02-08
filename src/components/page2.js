import React from 'react';
import Imagem from './Imagem.js';
import ImageButton from './Button.js';
import { Link } from 'react-router-dom';
import './styles/style.css';


const Page2 = () => {
  return (
    <div>
      <Imagem imagem="dana2.png" position='absolute' height="751px" width= "751px" top="-75px" left="265px"/>
      <Imagem imagem="container2.png" position='absolute' height="288px" width= "1100px" top="488px" left="90px"/>
      <h4 class = "anna">Posso analisar sua expressão facial?</h4>
      <h5 class = "anna">SIM</h5>
      <h6 class = "anna">NÃO</h6>

      <Link to="/page3">
        <ImageButton
          className = "Button-sim" imageUrl="Button2.png"
        />
      </Link>

      <Link to="/">
        <ImageButton
          className = "Button-nao" imageUrl="Button2.png"
        />
      </Link>

    </div>
  );
};

export default Page2;
import React from 'react';
import Imagem from './Imagem.js';
import './styles/style.css';

const Final = () => {

  return (
    <div>
      <Imagem imagem="dana2.png" position='absolute' height="730px" width="730px" top="-13px" left="275px" />
      <Imagem imagem="container2.png" position='absolute' height="227px" width="912px" top="547px" left="196px" />
      <h10 class = "anna"> Obrigada por usar nossa aplicação, até a próxima!</h10>
    </div>
  );
};

export default Final;

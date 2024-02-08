import React from 'react';
import styles from '../components/ajuda_profissional.module.css'
import BrilhaEstrelinha from './brilhaestrelinha'; // Substitua com o caminho correto para o seu componente StarRating
import simNao from '../components/simNao.png'

const GrandeEstrela = () => {
  // O componente de página pode conter mais lógica ou componentes adicionais conforme necessário
  return (
    <div>
      <div>
            <img className = {styles.fotoSimNao} src = {simNao}/>
        </div>
        <div className={styles.enviar}>
            <p><a href="/obrigado">ENVIAR</a></p>
        </div>
        <div className={styles.deNota}>
            <p><b>Como você avalia a sua experiência comigo?</b></p>
        </div>
      <div className={styles.estrela10}><BrilhaEstrelinha totalStars={5} /></div>
      
    </div>
  );
};

export default GrandeEstrela;
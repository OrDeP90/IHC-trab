import React from 'react';
import comocozinha from '../components/cozinhando.png'
import styles from '../components/ajuda_profissional.module.css'



function Solucao3() {
    return (
    <div>
        <div className={styles.titulo}>
            <p><b>Também sugiro seguir ou começar algum hobby</b></p>
        </div>
        <div className={styles.opcoes}>
            <p><b>Aqui estão algumas opções:</b></p>
        </div>
        <div className={styles.corrida}>
            <p><b>Culinária</b></p>
        </div>
        <div className={styles.luta}>
            <p><b>Teatro</b></p>
        </div>
        <div className={styles.natacao}>
            <p><b>Dança</b></p>
        </div>
        <div className={styles.academia}>
            <p><b>Pintura</b></p>
        </div>
        <div className={styles.ciclismo}>
            <p><b>Costura</b></p>
        </div>
        <div className={styles.avalie}>
            <p><b>AVALIE SUA EXPERIÊNCIA</b></p>
        </div>
        <div>
            <img className = {styles.mulherCozinhando} src = {comocozinha}/>
        </div>
    </div>
    
    );
  }
  
  export default Solucao3;
  
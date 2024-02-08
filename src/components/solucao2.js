import React from 'react';
import correcorre from '../components/correndo.png'
import styles from '../components/ajuda_profissional.module.css'
import seta from '../components/seta.png';


function Solucao2() {
    
    return (
    <div>
        <div className={styles.titulo}>
            <p><b>Sugiro algumas atividades físicas</b></p>
        </div>
        <div className={styles.opcoes}>
            <p><b>Aqui estão algumas opções:</b></p>
        </div>
        <div className={styles.corrida}>
            <p><b>Corrida</b></p>
        </div>
        <div className={styles.luta}>
            <p><b>Luta</b></p>
        </div>
        <div className={styles.natacao}>
            <p><b>Natação</b></p>
        </div>
        <div className={styles.academia}>
            <p><b>Academia</b></p>
        </div>
        <div className={styles.ciclismo}>
            <p><b>Ciclismo</b></p>
        </div>
        <div>
            <img className = {styles.mulherCorrendo} src = {correcorre}/>
        </div>

        <div>
            <a href="/solucao1">
            <img className={styles.botaoSeta} src={seta}></img>
            </a>
        </div>
    </div>
    
    );
  }
  
  export default Solucao2;
  
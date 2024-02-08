import React from 'react';
import seta from '../components/seta.png'
import medita from '../components/meditando.png'
import styles from '../components/ajuda_profissional.module.css'



function Solucao4_0() {
    return (
    <div>
        <div className={styles.titulo}>
            <p><b>Já experimentou realizar alguma atividade dessas?</b></p>
        </div>
        <div className={styles.meditar}>
            <p><b>Meditar</b></p>
        </div>
        <div className={styles.socializar}>
            <p><b>Socializar</b></p>
        </div>
        <div className={styles.metas}>
            <p><b>Estabeleça metas</b></p>
        </div>
        <div>
            <img className = {styles.mulherMeditando} src = {medita}/>
        </div>
        <div>
            <img className={styles.botaoSeta} src={seta}/>
        </div>
    </div>
    
    );
  }
  
  export default Solucao4_0;
  
import React from 'react';
import medita from '../components/meditando.png';
import styles from '../components/ajuda_profissional.module.css';
import seta from '../components/seta.png'

function Solucao4() {
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
        <img className={styles.mulherMeditando} src={medita} alt="Mulher Meditando" />
      </div>
      <div>
        <a href='/solucao2t'>
        <img className={styles.botaoSeta} src={seta}/>
        </a>
      </div>
    </div>
  );
}

export default Solucao4;

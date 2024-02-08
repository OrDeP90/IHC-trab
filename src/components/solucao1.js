import React from 'react';
import psicologo from '../components/psicologo.png'
import styles from '../components/ajuda_profissional.module.css'



function Solucao1() {
    return (
    <div>
        <div className={styles.titulo}>
            <p><b>Sugiro ajuda profissional</b></p>
        </div>
        <div className={styles.Texto2}>
            <p><b>
                Aqui estão alguns 
                <br />
                profissionais recomendados 
                <br />
                em São Carlos
            </b></p>
        </div>
        <div className={styles.psicologo1}>
            <p><b>
                Carla Fernanda Simão 
                <br />
                (16) 99728-7615 
            </b></p>
        </div>
        <div className={styles.psicologo2}>
            <p><b>
                Carla Fernanda Simão 
                <br />
                (16) 99728-7615 
            </b></p>
        </div>
        <div className={styles.avalie}>
            <p><a href='/avaliacao'>AVALIE SUA EXPERIÊNCIA</a></p>
        </div>
        <div>
            <img className = {styles.Psicologo} src = {psicologo}/>
        </div>
        <div>
            <a href="../components/solução2">
                <img src="../components/psicologo.png" alt="Descrição da Imagem" />
            </a>
        </div>
    </div>
    
    );
  }
  
  export default Solucao1;
  
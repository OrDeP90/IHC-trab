import React from 'react';
import agradece from '../components/agradeceDemais.png'
import styles from '../components/ajuda_profissional.module.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const Obrigado= ()=> {

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
        navigate('/');
      }
    }, [redirect, navigate]);


    return (
    <div>
        <div>
            <img className = {styles.mulherAgradecendo} src = {agradece}/>
        </div>
        <div className={styles.agradece}>
            <p><b>Obrigada pela sua avaliação, até a próxima!</b></p>
        </div>
        
    </div>
    
    );
  }
  
  export default Obrigado;
  
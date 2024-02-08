import './style.css';
import seta from '../components/seta.png';


const Button = ({className, imageUrl}) => {
  return (
    <button className={botaoSeta}>
      <img src={seta}/>
    </button>
  );
};

export default Button;
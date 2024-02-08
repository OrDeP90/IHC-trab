import './styles/ArrowButton.css';
import arrow from "./images/arrow.png"

const ArrowButton = ({onClick}) => {
  return (
    <button className="round-button" onClick={onClick}>
      <img src={arrow}/>
    </button>
  );
};

export default ArrowButton;
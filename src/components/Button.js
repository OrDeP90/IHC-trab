import './styles/style.css';

const Button = ({className, imageUrl}) => {

  return (
    <button className={className}>
      <img src={imageUrl}/>
    </button>
  );
};

export default Button;

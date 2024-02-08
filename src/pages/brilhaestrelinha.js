import React, { useState } from 'react';
import '../components/ajuda_profissional.module.css'; // Certifique-se de que o caminho está correto

// Substitua pelos caminhos corretos das suas imagens
import starFilled from '../components/estrelaVerde.png';
import starEmpty from '../components/estrelaNormal.png';

const BrilhaEstrelinha = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((_, index) => {
        const value = index + 1;
        return (
          <img
            key={value}
            src={value <= (hover || rating) ? starFilled : starEmpty}
            onMouseEnter={() => setHover(value)}
            onMouseLeave={() => setHover(rating)}
            onClick={() => setRating(value)}
            className="star"
            alt={`Star ${value}`}
          />
        );
      })}
    </div>
  );
};

export default BrilhaEstrelinha;


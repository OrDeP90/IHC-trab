import React from 'react';

function Imagem({ imagem, position, height, width, top, left , zIndex}) {
  const imageStyle = {
    position: position,
    width: width,
    height: height,
    left: left,
    top: top,
    zIndex: zIndex || 0
  };

  return (
<div>
      <img src={imagem} style={imageStyle} alt="Imagem" />
    </div>
  );
}

export default Imagem;


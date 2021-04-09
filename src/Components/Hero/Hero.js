import React from 'react';

import './Hero.css';

function Hero(props) {
  return (
    <div
      className="Hero"
      style={{ backgroundImage: `url(${props.img})` }}
    ></div>
  );
}

export default Hero;

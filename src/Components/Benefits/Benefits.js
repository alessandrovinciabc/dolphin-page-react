import React from 'react';

import './Benefits.css';

function Benefits(props) {
  return (
    <div className="Benefits">
      {props.cards.map((card) => {
        return (
          <div className="Benefits__card">
            <img className="Benefits__image" src={card.img} alt="" />
            <p className="Benefits__text">{card.text}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Benefits;

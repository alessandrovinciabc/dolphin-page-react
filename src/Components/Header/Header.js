import React from 'react';

import './Header.css';
import './__logo/Header__logo.css';

function Header(props) {
  return (
    <div className="Header">
      <img className="Header__logo" src={props.logo} alt="" />
      {props.children}
    </div>
  );
}

export default Header;

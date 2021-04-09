import React from 'react';

import './Navbar.css';
import './__link/Navbar__link.css';

function Navbar(props) {
  return (
    <div className="Navbar">
      {props.links.map((link) => {
        return (
          <a className="Navbar__link" href={link.link}>
            {link.text}
          </a>
        );
      })}
    </div>
  );
}

export default Navbar;

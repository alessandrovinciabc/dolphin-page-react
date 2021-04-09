import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Components/Header/Header.js';
import Navbar from './Components/Navbar/Navbar.js';
import Hero from './Components/Hero/Hero.js';

import './main.css';
import dolphinHero from './dolphin-underwater.jpg';

let createLink = (text, url) => {
  return {
    text,
    link: url,
  };
};

let navigationLinks = [];
navigationLinks.push(createLink('Home', '#'));
navigationLinks.push(createLink('About us', '#'));
navigationLinks.push(createLink('Contacts', '#'));

ReactDOM.render(
  <React.Fragment>
    <Header logo="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/274/dolphin_1f42c.png">
      <Navbar links={navigationLinks} />
    </Header>
    <Hero img={dolphinHero}></Hero>
  </React.Fragment>,
  document.getElementById('root')
);

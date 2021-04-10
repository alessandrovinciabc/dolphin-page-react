import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Components/Header/Header.js';
import Navbar from './Components/Navbar/Navbar.js';
import Hero from './Components/Hero/Hero.js';
import Benefits from './Components/Benefits/Benefits.js';

import './main.css';
import dolphinHero from './dolphin-underwater.jpg';
import cat from './grooming-cat.png';

let createLink = (text, url) => {
  return {
    text,
    link: url,
  };
};

let createCard = (img, text) => {
  return {
    img,
    text,
  };
};

let navigationLinks = [];
navigationLinks.push(createLink('Home', '#'));
navigationLinks.push(createLink('About us', '#'));
navigationLinks.push(createLink('Contacts', '#'));

let benefits = [];
benefits.push(createCard(cat, 'Dolphins for everyone'));
benefits.push(createCard(cat, 'Boost your serotonin'));
benefits.push(createCard(cat, 'Pay as you go'));

ReactDOM.render(
  <React.Fragment>
    <Header logo="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/274/dolphin_1f42c.png">
      <Navbar links={navigationLinks} />
    </Header>
    <Hero img={dolphinHero}>
      <h1 className="Hero__h1">Introducing Dolphin</h1>
      <h2 className="Hero__h2">Bring it with you, everywhere you go.</h2>
      <button className="Hero__button">Learn more</button>
    </Hero>
    <h1 className="Benefits__header">Everyone needs a dolphin</h1>
    <Benefits cards={benefits} />
  </React.Fragment>,
  document.getElementById('root')
);

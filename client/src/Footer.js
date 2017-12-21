import React from 'react';

import './Footer.css';

import facebook from './images/facebook.png';
import google from './images/google.png';
import instagram from './images/instagram.png';
import youtube from './images/youtube.png';
import linkedIn from './images/linkedin.png';

const Footer = () => {
  const links = [
    { image: facebook, link: 'http://www.facebook.com' },
    { image: google, link: 'http://www.google.com' },
    { image: instagram, link: 'http://www.instagram.com' },
    { image: youtube, link: 'http://www.youtube.com' },
    { image: linkedIn, link: 'http://www.linkedIn.com' }
  ];

  return (
    <div className="footer">
	  <div className="container" id="social-network-links">
	  {/*
        {links.map(linkItem => {
          return (
            <a href={linkItem.link} key={linkItem.link}>
              <img src={linkItem.image} alt="social network link" />
            </a>
          );
        })}
	   */}
      </div>
      <hr />
      <p>Copyright &copy;2017 All Rights Reserved</p>
    </div>
  );
};

export default Footer;

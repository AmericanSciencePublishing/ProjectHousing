import React from 'react';
import './css/Footer.css';
import Mailto from './Mailto';

const Footer = () => {

  return (
      <div className="footer">
	<div className="upper">
	  <a href="/about" target='_blank'>ABOUT US </a>
	  <Mailto email="szhao31@hawk.iit.edu" obfuscate={true}>CONTACT US
	    </Mailto>
	  <Mailto email="szhao31@hawk.iit.edu" obfuscate={true}> SUPPORT
          </Mailto>
	  <a href="/terms" target='_blank'>TERMS</a>
	  <a href="/terms" target='_blank'>PRIVACY</a>

	</div>
	<hr />
	<div className="lower">
	  <div className="lower_copyright">
	    <p>Copyright &copy;2018 All Rights Reserved</p>
	  </div>
	  <div className="lower_icons">
	    <a href="http://www.facebook.com" target='_blank' rel="noopener noreferrer"> <i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i></a>
	    <a href="http://www.twitter.com" target='_blank' rel="noopener noreferrer"> <i className="fa fa-twitter fa-2x" aria-hidden="true"></i></a>
	    <a href="http://http://www.wechat.com/en/" target='_blank' rel="noopener noreferrer"> <i className="fa fa-weixin fa-2x " aria-hidden="true"></i></a>
	    </div>
	</div>
      </div>

  );
};

export default Footer;

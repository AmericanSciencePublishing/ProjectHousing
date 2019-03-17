import React from 'react';
import Footer from './Footer';
import {Image} from 'react-bootstrap';

import './css/Faq.css';
import faqImg from "./images/FAQ.png";

export default class Faq extends React.Component {
  render() {
    return (

	    <div >
	    <Image responsive className="faqImg col-xs-12 col-sm-12 c\
ol-md-12 col-lg-12 col-xl-12" src={faqImg} alt="faq"/>
	    <hr/>
	    <div className="container">
      	    <h2 style={{color:"#1A237E"}}>1. Can foreigners without green cards buy real estate in the United States?</h2>

	    <p> The United States is a more mature market economy, welcomed by foreign investors. At the same time, the law transparent and open than other countries relatively simple and clear. Anyone can buy American real estate, as long as you have a Chinese passport, you c purchase transaction, even if you do not have a US visa, you can also complete the transaction by fax. Specific questions can contact of the North American purchase network.
	    </p>

	    <h2 style={{color:"#1A237E"}}>2. Why buy a house in the United States?</h2>
	    <p>Buy an ordinary apartment in China and now you can buy a single - family villa in the United States. Relatively speaking, buying a hou is already highly investing. At the same time, you can also for a number of years after the children to the United States to study in pri schools or universities to prepare; as a holiday or pension home is also a good choice. In the face of thousands of houses, investors o few months to find the ideal house. North American buyers through the local professional real estate broker to help you screen out the of the house, which greatly saves you time.
	    </p>

	    <h2 style={{color:"#1A237E"}}>3. Do I need to pay a service charge?</h2>
	    <p>North America purchase network does not charge any fees to buyers, all services (except VIP) are free.</p>

	    <h2 style={{color:"#1A237E"}}>4. Can I immigrate to the United States after I buy a house in the United States?</h2>
	    <p>Generally speaking, buy a house and immigrants to the United States is not directly linked. Foreigners only need to provide proof of id the United States visa can apply for the purchase of real estate in the United States. Buying a house can be seen as an investment b buyers network can provide VIP customers through the real estate investment immigrants to the United States advisory services.
	    </p>

	    <h2 style={{color:"#1A237E"}}>5. Is it the best time to invest in the US housing market?</h2>
	    <p>At the end of 2008, housing prices in many cities in the United States continued to skyrocket for a few years and began to fall. Now, p have fallen by about 30 percent or more, and some prices have fallen back to the beginning of 2000. Relatively speaking, the current States has great investment value. However, just as the stock market, no one can finish the transaction at the lowest point. Investors their own financial situation and family circumstances to determine the time of investment and purchase the location of the house.
	    </p>
	    </div>
	    <Footer />
	</div>

    );
  }
}

import React from 'react';
import Footer from './Footer';
import {Col,Row, Image} from 'react-bootstrap';

import './css/Info.css';
import infoImg from "./images/moreinfo.png";

class Info extends React.Component{
  render(){
    return(
      <div >
	<Image responsive className="infoImg col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" src={infoImg} alt="more info"/>
	<hr/>
	<div id="text" className="container">
	  <Row>
	    <Col xs={4}>
    	      <div id="infoLeft">
	        <ul>
	          <li><a href="/"> Real Estate News</a> </li>
	          <li><a href="/"> Commercial Eatate</a></li>
                  <li><a href="/"> Buyers Guidance</a></li>
	          <li><a href="/"> Mortgage</a></li>
	          <li><a href="/"> Investment</a></li>
	          <li><a href="/"> Immigrantion</a></li>
	          <li><a href="/"> Education</a></li>
	          <li><a href="/"> Medical Care</a></li>
	          <li><a href="/"> Living</a></li>
	          <li><a href="/"> Travel</a></li>
	          <li><a href="/"> Other</a></li>
	        </ul>
	      </div>
	    </Col>
	    <Col xs={8}>
	      <div >
	        <h2>Real Estate News</h2>
	        <ul>
                  <li><a href="/"> Recommendations of the most secure financial platforms</a> </li>
                  <li><a href="/"> To understand the price of the Tampa in the choice of purchase is the best decision</a></li>
                  <li><a href="/"> Vancouver to buy a house advantage to buy more attention to note</a></li>
                  <li><a href="/"> In the United States, is it better to buy a good new house in Los Angeles or second-hand house</a></li>
	          <li><a href="/"> What is the main reason for buying a house in Tampa?</a></li>
	        </ul>

	        <h2>Commercial Estate</h2>
                <ul>
                  <li><a href="/"> What is the real estate market in the Orlando region of the United State?</a> </li>
                  <li><a href="/"> To understand the price of the Tampa in the choice of purchase is the best decision</a></li>
                  <li><a href="/"> Vancouver to buy a house advantage to buy more attention to note</a></li>
                  <li><a href="/"> In the United States, is it better to buy a good new house in Los A\
ngeles or second-hand house</a></li>
                  <li><a href="/"> What is the main reason for buying a house in Tampa?</a></li>
                </ul>

	        <h2>Real Estate News</h2>
                <ul>
                  <li><a href="/"> Recommendations of the most secure financial platforms</a> </li>
                  <li><a href="/"> To understand the price of the Tampa in the choice of purchase is \
                      the best decision</a></li>
                  <li><a href="/"> Vancouver to buy a house advantage to buy more attention to note</a></li>
                  <li><a href="/"> In the United States, is it better to buy a good new house in Los A\
                      ngeles or second-hand house</a></li>
                  <li><a href="/"> What is the main reason for buying a house in Tampa?</a></li>
                </ul>

	        <h2>Real Estate News</h2>
                <ul>
                  <li><a href="/"> Recommendations of the most secure financial platforms</a> </li>
                  <li><a href="/"> To understand the price of the Tampa in the choice of purchase is \
                      the best decision</a></li>
                  <li><a href="/"> Vancouver to buy a house advantage to buy more attention to note</a></li>
                  <li><a href="/"> In the United States, is it better to buy a good new house in Los A\
                      ngeles or second-hand house</a></li>
                  <li><a href="/"> hat is the main reason for buying a house in Tampa?</a></li>
                </ul>
	      </div>
	    </Col>
	  </Row>
	</div>
	<Footer />
      </div>



	)
    }
}

export default Info;

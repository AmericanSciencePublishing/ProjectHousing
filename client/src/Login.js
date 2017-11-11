import React from 'react';
import {Modal, OverlayTrigger, Row, Col, PanelGroup, Panel,Button } from 'react-bootstrap';
import './Login.css';
import LoginRegisForm from'./LoginRegisForm';

class Login extends React.Component{
    
    constructor(){
	super();
	this.state={showModal:false};
	this.handleClick=this.handleClick.bind(this);
	this.close=this.close.bind(this);
    }
    close(){
	this.setState({showModal:false});
    }
    handleClick(){
	this.setState({showModal:true});
    }


    render() {
	return(
	  <div>
		{/*	<Button id="loginButton" onClick={this.handleClick}> Login </Button>*/}
	    <span id="loginSpan" onClick={this.handleClick}> Login </span>
	
            {this.state.showModal ?< LoginRegisForm show={this.state.showModal} onHide={this.close}/> : null} 
         </div>
      )
  }
}
export default Login;

import React from 'react';
import {Well, ButtonGroup, Button, Form, FormGroup, Col, FormControl} from 'react-bootstrap';
import Footer from './Footer';

import './css/findpwd.css';

var axios = require("axios");


class Forgotpwd extends React.Component{

    constructor(props){
	super(props);
	this.state={
	    email:'',
	    isLoading: false,
	    Msg:''
	};
	this.getEmail = this.getEmail.bind(this);
    }

    getEmail(event){
	this.setState({
	    email:event.target.value.toLowerCase()
	},this.changeEmailValState);
    }

    handleSubmit(event){
	event.preventDefault();
	this.setState({
            isLoading:true
        });
	var e = this.state.email;
	let loginInfo ={
	    email:e
	};
	axios.put('/forgotpwd/', loginInfo).then(res=>{
//	    console.log(res);
	    this.setState({
		isLoading:false
            });
	    this.setState({
		Msg : res.data.message
	    });

	}).catch(err=>{
	    console.log(err);
	    this.setState({
            isLoading:false
        });
	});

    }


    render (){
	let isLoading = this.state.isLoading;
        return(
	    <div >
	    <div className="container forget_input_email_page">
		<Col xsOffset={3} xs={6}>
		<Well>
		<h4> Please enter the Email you used to sign up </h4>
		<h4> We will send you a link to reset your password.</h4>
		</Well>
	      <Form id="forgotpwdform" onSubmit={event=>{this.handleSubmit(event);}} horizontal style={{marginTop:"2rem"}}>

		<FormGroup controlId="emailForgot" bsSize="large">
		  <FormControl
		    required
		    autoFocus
		    type="email"
		    onChange={this.getEmail}
		    placeholder="Enter your email"/>
		</FormGroup>

		{/*submit button*/}
		<FormGroup>
		  <ButtonGroup >
		    <Button
		      block
		      active
		      disabled={isLoading}
		      bsSize="large"
		      bsStyle="info"
		      type="submit"
		      >
		      {isLoading ? 'Loading...' : 'Submit'}
		    </Button>
		  </ButtonGroup>
		</FormGroup>

		<FormGroup>
		<p align="center" style={{color: this.state.Msg === "" ? '#4caf50': "#f44336"}} id="submitTip">{this.state.Msg}</p>
		</FormGroup>
	      </Form>
		</Col>
	    </div>
		<Footer />
		</div>
	);
    }

}

export default Forgotpwd;

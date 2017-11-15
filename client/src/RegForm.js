
import React from 'react';
import {Checkbox, ButtonGroup, ButtonToolbar, Button, Form, FormGroup, Col, FormControl} from 'react-bootstrap';
import './LogForm.css';
var axios = require("axios");
//import ButtonLoader from 'react-bootstrap-button-loader';


//no term of use!!!!!!should add in the future

class RegForm extends React.Component{
    constructor(props){
	super(props);
	this.state={
	    email:"",
	    password:"",
	    password1:"",
	    password2:"",
	    passwordMSG:"",
	    confirmPassword:"",
	    submitMSG:"",
	    inputValEmail:"null"
//	    isLoading:false,
	};

	this.getEmail=this.getEmail.bind(this);
	this.getPassword1=this.getPassword1.bind(this);
	this.getPassword2=this.getPassword2.bind(this);
	this.comparePasswords=this.comparePasswords.bind(this);
	
    }



    getPassword1(event){
	let pass1 = event.target.value.trim();
	this.setState({
	    password1:pass1
	});
    }

    getPassword2(event){
	let pass2 = event.target.value.trim();
	this.setState({
	    password2:pass2
	});
    }

    comparePasswords(pass1,pass2){

	if(pass1 !== pass2){
	    this.setState({
		passwordMSG:"Password Must Match"
	    });
	    return false;
	}
	else if(pass1 === pass2){
	    this.setState({
		passwordMSG:"Passwords Match",
		password:pass1
	    });
	    return true;
	}
    }
    
    
    getEmail(event){
	this.setState({
	    email:event.target.value.toLowerCase(),
	    inputValEmail:this.state.email!=="" ? "success":"null"
	});
	console.log(this.state.email);
    }
    
    //checkState
    checkState(){
	return true;
    }

    //handle submit
    //use a para(let in render()) to control if check as a landlord

    
    handleSubmit(){

	var passwordComparison = this.comparePasswords(this.state.password1, this.state.password2);
	var everythingFilled = this.checkState();
	if(passwordComparison && everythingFilled){
	    
	    var newUserInfo={
		email:this.state.email,
		password:this.state.password
	    };
	    axios.post('/sign_up', newUserInfo).then(res=>{
		console.log("registration res", res);
	    this.setState({
		submitMSG:"Sign up successfully!"
	    });
	    });
	}
    }
	    	
	    
    render(){
	
	return(
	    <div>
	      <Form onSubmit={event=>{event.preventDefault();this.handleSubmit();}} horizontal style={{marginTop:"2rem"}}>

	    {/* input e-mail */}
	    
		<FormGroup validationState={this.state.inputValEmail} controlId="email" bsSize="large">
		<Col xsOffset={1} xs={10}>
		<FormControl
		  required
		  autoFocus
		  type="email"
		  onChange={this.getEmail}
		  placeholder="Enter Email"/>
		<FormControl.Feedback />
		</Col>
		</FormGroup>

	    {/*input password */}
		<FormGroup controlId="password" bsSize="large">
		<Col xsOffset={1} xs={10}>
		<FormControl
		  required
		  onChange={this.getPassword1}
		  type="password"
		  placeholder="Creat Password"
		/>
		</Col>
		</FormGroup>

	    {/*confirm password*/}
	    
		<FormGroup controlId="confirmPassword" bsSize="large">
                <Col xsOffset={1} xs={10}>
                  <FormControl
		    required
		    onChange={this.getPassword2}
		    type="password"
		    placeholder="Re-enter your Password"
                />
                </Col>
                </FormGroup>

	    {/*checkbox for landlord */}

		<FormGroup>
		<Col xsOffset={1} xs={10}>
		<Checkbox> I am a landlord or industry professional</Checkbox>
		</Col>
		</FormGroup>
		
		{/*submit button*/}
		
		<ButtonToolbar justified>
		<ButtonGroup >
		<Button
		  block
		  id="loginSubButton"
		  bsSize="large"
		  bsStyle="info"
           	  type="submit"
		  >Submit
		</Button>
		</ButtonGroup>
		</ButtonToolbar>
		</Form>
		</div>

	)
    }
}
export default RegForm;

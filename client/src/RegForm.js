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
	    inputValEmail:null,
	    inputValPass1:null,
	    inputValPass2:null,
	    isLoading:false
	};

	this.changeEmailValState=this.changeEmailValState.bind(this);
	this.changePass1ValState=this.changePass1ValState.bind(this);
	this.changePass2ValState=this.changePass2ValState.bind(this);
	this.getEmail=this.getEmail.bind(this);
	this.getPassword1=this.getPassword1.bind(this);
	this.getPassword2=this.getPassword2.bind(this);
	this.comparePasswords=this.comparePasswords.bind(this);

    }



    getPassword1(event){
	let pass1 = event.target.value.trim();
	this.setState({
	    password1:pass1
	},this.changePass1ValState);
    }

    getPassword2(event){
	let pass2 = event.target.value.trim();
	this.setState({
	    password2:pass2
	},this.changePass2ValState);
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
    
    //in getEmail(), the setState use callback style format to set state.email immediately, because standard setState() does not always immediately update the componen. check here for more info :https://stackoverflow.com/questions/46867483/react-state-not-rendering-in-real-time
    
    getEmail(event){
	this.setState({
	    email:event.target.value.toLowerCase()},
		      this.changeEmailValState);
    }

    changePass1ValState(){
        this.setState({
            inputValPass1: this.state.password1===""? null:"success"
        });
    }

    changePass2ValState(){
	if(this.state.password1===this.state.password2){
	    this.setState({
		inputValPass2:"success",
		passwordMSG:"Passwords Match"
	    });
	}else if(this.state.password2===""){
	    this.setState({
                inputValPass2:null
            });
        }else{
	    this.setState({
                inputValPass2:"warning",
		passwordMSG:"Password Must Match"
            });
	}
    }
    //using regExp to verify an email address
//    const emailRegex = /^\S+@\S+\.\S+$/;
    changeEmailValState(){
	var emailRegex = /^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i;
	if(emailRegex.test(this.state.email)){
	    this.setState({
		inputValEmail:"success"
//		inputValEmail: this.state.email===""? null:"success"
	    });
	}else{
	    this.setState({
		inputValEmail: this.state.email===""? null:"warning"
	    });
	}
    }

    
    //checkState
    checkState(){
	return true;
    }

    //handle submit
    //!!!future
    //use a para(let in render()) to control if check as a landlord

    
    handleSubmit(){
	var passwordComparison = this.comparePasswords(this.state.password1, this.state.password2);
	var everythingFilledOut = this.checkState();
	this.setState({
	    isLoading:true
	});
	if( passwordComparison && everythingFilledOut ){
	    console.log("POSTING USER DATA");
	    var newUserInfo={
		email:this.state.email,
		password:this.state.password
	    };
	    axios.post('/sign_up', newUserInfo).then(res=>{
		//		console.log("registration res", res);
		if(!res.data.code){
		    this.setState({
			submitMSG:"Sign up successfully!",
			isLoading: false
		    });
		    console.log("sign up seccessfully!",res);
		}
		if(res.data.code===11000){
		    this.setState({
                        submitMSG:"Email Address Already in Use",
                        isLoading: false
                    });
                    console.log("Email Address Already in Use",res);
                }
		//here we will do page jump;
//		browserHistory.push('/abc');
	
	    }).catch(err=>{
		console.log(err);
		this.setState({
		    submitMSG:"Invalid Information",
		    isLoading: false
		});
	    });
	}else{
	    this.setState({
		submitMSG:"Can't submit, Check User Info",
		isLoading: false
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
		<FormGroup validationState={this.state.inputValPass1} controlId="password" bsSize="large">
		<Col xsOffset={1} xs={10}>
		<FormControl
		  required
		  onChange={this.getPassword1}
		  type="password"
		  placeholder="Creat Password"
		  />
		<FormControl.Feedback />
		</Col>
		</FormGroup>

	    {/*confirm password*/}
	    
		<FormGroup validationState={this.state.inputValPass2} controlId="confirmPassword" bsSize="large">
                <Col xsOffset={1} xs={10}>
                  <FormControl
		    required
		    onChange={this.getPassword2}
		    type="password"
		    placeholder="Re-enter your Password"
                    />
		  <FormControl.Feedback />
                </Col>
                </FormGroup>

	    {/*checkbox for landlord */}

		<FormGroup>
		<Col xsOffset={1} xs={10}>
		<Checkbox> I am a landlord or industry professional</Checkbox>
		</Col>
		</FormGroup>
		
		{/*submit button*/}
		<FormGroup>
		<Col xsOffset={1} xs={10}>
		<ButtonToolbar justified>
		<ButtonGroup >
		<Button
		  block
		  id="loginSubButton"
		  bsSize="large"
		  bsStyle="info"
           	  type="submit"
		  disabled={this.state.isLoading}
		  >
		  {this.state.isLoading ? "Uploading..." : "Submit" }
		</Button>
		</ButtonGroup>
		<p align="center" style={{color: this.state.submitMSG === "Sign up successfully!" ? '#4caf50': "#f44336"}} id="submitTip">{this.state.submitMSG}</p>
		</ButtonToolbar>
		</Col>
		</FormGroup>
		</Form>
		</div>

	);
    }
}
export default RegForm;

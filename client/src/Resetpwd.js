import React from 'react';
import {Well, ButtonGroup,Col, ButtonToolbar, Button, Form, FormGroup, FormControl} from 'react-bootstrap';

import './css/findpwd.css';
import Footer from './Footer'
//import history from './history';

import * as UserAPI from './utils/UserAPI'

class Resetpwd extends React.Component{
    constructor(props){
	super(props);
	this.state={
	    password1:"",
	    password2:"",
	    passwordMSG:"",
	    submitMSG:"",
	    inputValPass1:null,
	    inputValPass2:null,
	    isLoading:false,
	    Msg:""
	};
	this.changePass1ValState=this.changePass1ValState.bind(this);
	this.changePass2ValState=this.changePass2ValState.bind(this);
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
//		password:pass1,
		passwordMSG:"Passwords Match"

	    });
//	    console.log(this.state.password);
	    return true;
	}
    }

    changePass1ValState(){
        this.setState({
            inputValPass1: this.state.password1===""? null:"success"
        });
    }

    changePass2ValState(){
	if(this.state.password1===this.state.password2 && this.state.password2 !==""){
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

    handleSubmit(event){
	event.preventDefault();
	var passwordComparison = this.comparePasswords(this.state.password1, this.state.password2);
	//checkState() may not useful right now, but maybe useful in the future, to check everything has been filled out.
	this.setState({
	    isLoading:true
	});
	if( passwordComparison){
	    console.log("POSTING new password");
	    var newUserInfo={
		newPassword:this.state.password1
	    };

	    UserAPI.resetEmail(this.props.match.params.linktoken, newUserInfo).then(res=>{
		console.log("reset req's res:", res);
		if(res.data.message==='Successfully set your password'){
		    this.setState({
			submitMSG:"Successfully set your password, please login again",
			isLoading: false
		    });
		}
		else{
		    this.setState({
                        submitMSG:"Something wrong happened, please contact us.",
                        isLoading: false
                    });
//                    console.log("Email Address Already in Use",res);
                }


	    }).catch(err=>{
		console.log(err);
		this.setState({
		    submitMSG:"Network Error",
		    isLoading: false
		});
	    });
	}else{
	    this.setState({
		submitMSG:"Can't submit, Check Input",
		isLoading: false
	    });
	}
    }


    render(){

	return(
	    <div>
	    <div className="conatiner forget_input_email_page">
		<Col xsOffset={3} xs={6}>
		<Well>
		<h4>Please reset your password</h4>
		</Well>
		<Form onSubmit={event=>{this.handleSubmit(event);}} horizontal style={{marginTop:"2rem"}}>
		<FormGroup validationState={this.state.inputValPass1} controlId="password" bsSize="large">
		<FormControl
		  required
		  onChange={this.getPassword1}
		  type="password"
		  placeholder="Reset Password"
		  />
		<FormControl.Feedback/>
		</FormGroup>

	    {/*confirm password*/}

		<FormGroup validationState={this.state.inputValPass2} controlId="confirmPassword" bsSize="large">
                  <FormControl
		    required
		    onChange={this.getPassword2}
		    type="password"
		    placeholder="Re-enter your Password"
                    />
		  <FormControl.Feedback/>
                </FormGroup>

		<FormGroup>
		<ButtonToolbar justified='true'>
		<ButtonGroup >
		<Button
		  block
		  active
		  id="loginSubButtonReset"
		  bsSize="large"
		  bsStyle="info"
           	  type="submit"
		  disabled={this.state.isLoading}
		  >
		  Submit
		</Button>
		</ButtonGroup>
		</ButtonToolbar>
		</FormGroup>
		<p align="center" style={{color: this.state.submitMSG === "" ? '#4caf50': "#f44336"}} id="submitTip">{this.state.submitMSG}</p>
	      </Form>
	      </Col>
		</div>
		<Footer />
		</div>
	);
    }
}


export default Resetpwd;

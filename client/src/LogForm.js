import React from 'react';
import { ButtonGroup, ButtonToolbar, Button, Form, FormGroup, Col, FormControl} from 'react-bootstrap';
import './LogForm.css';
var axios = require("axios");

class LogForm extends React.Component{
    constructor(props){
	super(props);
	this.state={
	    email:'',
	    password:'',
	    inputValEmail:null,
	    inputValPass:null,
	    isLoading:false,
	    loginMSG:''
	};
	//	this.validateForm=this.validateForm.bind(this);
	this.getPassword = this.getPassword.bind(this);
	this.getEmail = this.getEmail.bind(this);
	this.changeEmailValState = this.changeEmailValState.bind(this);
	this.changePassValState = this.changePassValState.bind(this);
    }

    getPassword(event){
	let pass = event.target.value.trim();
	this.setState({
	    password:pass
	},this.changePassValState);
    }

    getEmail(event){
	this.setState({
	    email:event.target.value.toLowerCase()
	},this.changeEmailValState);
    }

    changeEmailValState(){
	var emailRegex = /^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i;
	if(emailRegex.test(this.state.email)){
	    this.setState({
		inputValEmail:"success"
	    });
	}else{
	    this.setState({
		inputValEmail: this.state.email===""? null:"warning"
	    });
	}
    }

    changePassValState(){
	this.setState({
            inputValPass: this.state.password===""? null:"success"
        });
    }
    

    handleSubmit(){
	var e = this.state.email;
	var p = this.state.password;
	
	let loginInfo ={
	    email:e,
	    password:p
	};
	this.props.test();
	this.setState({
	    isLoading:true
	});
	axios.post('/log_in', loginInfo).then(res=>{
	    console.log(res);
	    this.setState({
            isLoading:false
        });
	}).catch(err=>{
	    console.log(err);
	    this.setState({
            isLoading:false
        });
	});
	
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
		<FormGroup validationState={this.state.inputValPass} controlId="password" bsSize="large">
		  <Col xsOffset={1} xs={10}>
		    <FormControl
		      required
		      onChange={this.getPassword}
		      type="password"
		      placeholder="Input Password"
		      />
		    <FormControl.Feedback />
		  </Col>
		</FormGroup>

	    {/*submit button*/}
		<FormGroup>
		  <Col xsOffset={1} xs={10}>
		    <ButtonToolbar justified>
		      <ButtonGroup >
			<Button
			  block
			  active
			  id="loginSubButton"
			  bsSize="large"
			  bsStyle="info"
           		  type="submit"
			  disabled={this.state.isLoading}
			  >
			  Sign in
			</Button>
		      </ButtonGroup>
		      <p align="center" style={{color: this.state.submitMSG === "Login successfully!" ? '#4caf50': "#f44336"}} id="submitTip">{this.state.submitMSG}</p>
		    </ButtonToolbar>
		  </Col>
		</FormGroup>
	      </Form>
	    </div>
	    
	);
    }
}
export default LogForm;

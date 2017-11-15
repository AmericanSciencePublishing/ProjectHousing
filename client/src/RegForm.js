
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
	    confirmPassword:"",
	    submitMSG:""
//	    isLoading:false,
	};
	this.validateForm=this.validateForm.bind(this);
    }

    validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
    }

    //handle submit

    
    handleSubmit(inputEmail, inputPassword){
	var newUserInfo={
	    email:inputEmail.value,
	    password:inputPassword.value
	};
	axios.post('/sign_up', newUserInfo).then(res=>{
	    console.log("registration res", res);
	    this.setState({
		submitMSG:"Sign up successfully!"
	    });
	
	})
    }
	


    render(){
	let inputEmail;
	let inputPassword;
	let inputConfirmPassword;
	return(
	    <div>
	      <Form onSubmit={event=>{event.preventDefault();this.handleSubmit(inputEmail,inputPassword);}} horizontal style={{marginTop:"2rem"}}>

	    {/* input e-mail */}
	    
		<FormGroup controlId="email" bsSize="large">
		<Col xsOffset={1} xs={10}>
		<FormControl
		  required
		  autoFocus
		  type="email"
		  inputRef={node=>inputEmail=node}
		  placeholder="Enter Email"/>
		</Col>
		</FormGroup>

	    {/*input password */}
		<FormGroup controlId="password" bsSize="large">
		<Col xsOffset={1} xs={10}>
		<FormControl
		  required
		  inputRef={node=>inputPassword=node}
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
		    inputRef={node=>inputConfirmPassword=node}
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
          >	Submit
	    </Button>
		</ButtonGroup>
		</ButtonToolbar>
		</Form>
		</div>

	)
    }
}
export default RegForm;

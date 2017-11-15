import React from 'react';
import {ControlLabel, Checkbox, ButtonGroup, ButtonToolbar, Row, Button, Form, FormGroup, Col, FormControl} from 'react-bootstrap';
import './LogForm.css'
//import ButtonLoader from 'react-bootstrap-button-loader';


//no term of use!!!!!!should add in the future

class RegForm extends React.Component{
    constructor(props){
	super(props);
	this.state={
	    email:"",
	    password:"",
	    confirmPassword:"",
	    isLoading:false,
	};
	this.validateForm=this.validateForm.bind(this);
    }

    validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }
    handleSubmit = event => {
    event.preventDefault();
    }

    handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    }

    render(){
	return(
	    <div>
		<Form onSubmit={this.handleSubmit} horizontal style={{marginTop:"2rem"}}>
		<FormGroup controlId="email" bsSize="large">
		<Col xsOffset={1} xs={10}>
		<FormControl
                  autoFocus
                  type="email"
            value={this.state.email}
	    onChange={this.handleChange}
       	    placeholder="Enter Email"/>
		</Col>
		</FormGroup>
		<FormGroup controlId="password" bsSize="large">
		<Col xsOffset={1} xs={10}>
		<FormControl
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
	    placeholder="Creat Password"
		/>
		</Col>
		</FormGroup>
		<FormGroup controlId="confirmPassword" bsSize="large">
                <Col xsOffset={1} xs={10}>
                <FormControl
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            type="password"
            placeholder="Re-enter your Password"
                />
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
            bsSize="large"
            disabled={!this.validateForm()}
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

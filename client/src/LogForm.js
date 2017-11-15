import React from 'react';
import {ButtonGroup, ButtonToolbar, Button, Form, FormGroup, Col, FormControl} from 'react-bootstrap';
import './LogForm.css'

class LogForm extends React.Component{
    constructor(props){
	super(props);
	this.state={
	    email:'',
	    password:''
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
	    placeholder="Enter Password"
		/>
		</Col>
		</FormGroup>
		<ButtonToolbar justified>
		<ButtonGroup >
		<Button
	    block
            id="loginSubButton"
	    bsSize="large"
	    bsStyle="info"
            disabled={!this.validateForm()}
            type="submit">
		Sign in
	    </Button>
		</ButtonGroup>
		<ButtonGroup>
		<Button id="forget" bsStyle="link" href="/"> Forgot your password? </Button>
		</ButtonGroup>
		</ButtonToolbar>
		</Form>
		</div>
	
	)
    }
}
export default LogForm;

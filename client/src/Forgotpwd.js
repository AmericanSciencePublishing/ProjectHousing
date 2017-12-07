import React from 'react';
import {Well, ButtonGroup, Button, Form, FormGroup, Col, FormControl} from 'react-bootstrap';
//import history from './history';
var axios = require("axios");


class Forgotpwd extends React.Component{

    constructor(props){
	super(props);
	this.state={
	    email:'',
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
	var e = this.state.email;
	let loginInfo ={
	    email:e
	};
	axios.put('/forgotpwd/', loginInfo).then(res=>{
	    console.log(res);
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
        return(
	    <div className="container">
		<Col xsOffset={3} xs={6}>
		<Well>
		<h4> Please enter the Email you used to sign up </h4>
		<h4> We will send you a link to reset your password.</h4>
		</Well>
	      <Form id="forgotpwdform" onSubmit={event=>{this.handleSubmit(event);}} horizontal style={{marginTop:"2rem"}}>
		
		<FormGroup controlId="email" bsSize="large">
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
		      bsSize="large"
		      bsStyle="info"
		      type="submit"
		      >
		      Submit
		    </Button>
		  </ButtonGroup>
		</FormGroup>

		<FormGroup>
		<p align="center" style={{color: this.state.Msg === "" ? '#4caf50': "#f44336"}} id="submitTip">{this.state.Msg}</p>
		</FormGroup>
	      </Form>
	      </Col>
	    </div>

	);
    }
    
}

export default Forgotpwd;

import React from 'react';
import { NavDropdown, MenuItem } from 'react-bootstrap';
import history from './history';
import './App.css';
var axios = require("axios");

class AccountButtonHomePage extends React.Component{

    constructor(props){
	super(props);
	this.handleSignOut=this.handleSignOut.bind(this);
    }

    handleSignOut(event,eventKey){
	axios.put('/offline/'+this.props.user._id).then(res =>{
	    var gone = {};
	    this.props.sendUserToHome(gone);
	    history.push({
		    pathname: '/'
//		    state: {showModal :false}
		});
	});
    }
    
    render (){
        return(

		<NavDropdown title="My Account" id="dropdown-custom-1">
		<MenuItem eventKey="1">My Profile</MenuItem>
		<MenuItem eventKey="2">Saved Home</MenuItem>
		<MenuItem eventKey="3" href="#">Setting</MenuItem>
		<MenuItem divider />
		<MenuItem eventKey="4" onSelect={this.handleSignOut}>Sign Out</MenuItem>
		</NavDropdown>

	);
    }
}

export default AccountButtonHomePage;

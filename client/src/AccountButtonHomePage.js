import React from 'react';
import { NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import history from './history';
import './App.css';
var axios = require("axios");

class AccountButtonHomePage extends React.Component{

    constructor(props){
	super(props);
	this.state = { isOpen : false };
	this.handleOpen = this.handleOpen.bind(this);
	this.handleClose = this.handleClose.bind(this);
	this.handleSignOut=this.handleSignOut.bind(this);
    }
    //As there will be some problem in mobile device if I use hover open,
    //I decided to cancel the function, but remain the function code here
    //use onMouseEnter and onMouseLeave to handleopen&close
    handleOpen(){
	this.setState({ isOpen : true });
    }

    handleClose(){
	this.setState({ isOpen : false });
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

		<NavDropdown
		  title="My Account"
		  id="dropdown-custom-1">
		  <MenuItem header>Signed in as</MenuItem>
		  <MenuItem id="username" header><h4>{this.props.user.userName}</h4></MenuItem>
		  <MenuItem divider />

		  <MenuItem href={`/profile/${this.props.user.userName}`} eventKey="1">My Profile</MenuItem>

		  <MenuItem eventKey="2">Saved Home</MenuItem>
		  <LinkContainer to={`/profile/${this.props.user.userName}/setting`} >
		  <MenuItem eventKey="3">Setting</MenuItem>
		  </LinkContainer>
		  <MenuItem divider />
		  <MenuItem eventKey="4" onSelect={this.handleSignOut}>Sign Out</MenuItem>
		</NavDropdown>

	);
    }
}

export default AccountButtonHomePage;

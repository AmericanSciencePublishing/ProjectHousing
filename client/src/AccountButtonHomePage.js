import React from 'react';
import { NavDropdown, MenuItem } from 'react-bootstrap';
import './App.css';

class AccountButtonHomePage extends React.Component{
//	<NavDropdown.Toggle>
  //              <Glyphicon glyph="user" />
    //            <p>My Account</p>
      //          </NavDropdown.Toggle>
    render (){
        return(

		<NavDropdown title="My Account" id="dropdown-custom-1">
		<MenuItem eventKey="1">My Profile</MenuItem>
		<MenuItem eventKey="2">Saved Home</MenuItem>
		<MenuItem eventKey="3" href="#">Setting</MenuItem>
		<MenuItem divider />
		<MenuItem eventKey="4">Sign Out</MenuItem>
		</NavDropdown>

	);
    }
}

export default AccountButtonHomePage;

import React from 'react';
import './MyProfile.css';
// import {Col,Row} from 'react-bootstrap';
import { Tabs, Tab  } from 'react-bootstrap';
import history from './history';
import ProfileSetting from './ProfileSetting';
import { Nav, NavItem  } from 'react-bootstrap';
import {Route} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
var axios = require("axios");

class MyProfile extends React.Component{

    constructor(props){
	super(props);
	this.state = { user:{},
		       tabkey : 1
		     };
    }

    componentWillMount(){
//	console.log('MyProfile test:',this.props.match.params.username);
	console.log('MyProfile props',this.props);

	axios.get('/checkUser/').then (res=>{
            if(res.data === ""){
                console.log('no such session logged in');
            }
            else{
                this.setState({
                    user: res.data
                });
		console.log('profile user check:',this.state.user);
            }
        });
	
	if(this.props.match.params.aim === 'setting'){
	    this.setState({
		tabkey:3
	    });
	}else if(this.props.match.params.aim === 'save'){
	    this.setState({
		tabkey:2
	    });
	}else{
	    this.setState({
		tabkey:1
	    });
	}

    }
    

    render(){
	    return(
	    <div id="profileTabs" className="container">
	      <Nav activeKey={this.state.tabkey}  >
		<LinkContainer to="/user/:username/:aim/">
		  <NavItem >My Profile  </NavItem>
		  </LinkContainer>
		<NavItem >Tab 2 content</NavItem>

	      </Nav>

	      


	    </div>

	);
    }
}

export default MyProfile;

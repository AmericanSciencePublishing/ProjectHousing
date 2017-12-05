import React from 'react';
import './MyProfile.css';
<<<<<<< HEAD
// import {Col,Row} from 'react-bootstrap';
=======
import { Tabs, Tab  } from 'react-bootstrap';

>>>>>>> Added tabs in my profile

class MyProfile extends React.Component{

    constructor(props){
	super(props);
	this.state = { isOpen : false,
		       tabkey : 1
		     };
    }

    componentWillMount(){
	console.log('MyProfile test:',this.props.match.params.username);
	console.log(this.props);
    }

    render(){

	return(
	    <Tabs defaultActiveKey={this.state.tabkey}  id="controlled-tab-in-myprofile">
              <Tab eventKey={1} title="My Profile">  </Tab>
              <Tab eventKey={2} title="My Saves">Tab 2 content</Tab>
              <Tab eventKey={3} title="Setting">Tab 3 content</Tab>
	    </Tabs>


	);
    }
}

export default MyProfile;

import React from 'react';
import './MyProfile.css';
// import {Col,Row} from 'react-bootstrap';

class MyProfile extends React.Component{

    constructor(props){
	super(props);
	this.state = { isOpen : false };
    }

    componentWillMount(){
	console.log('MyProfile test',this.props.match.params.username);
    }

    render(){

	return(
	    <h1>hello11</h1>

	);
    }
}

export default MyProfile;

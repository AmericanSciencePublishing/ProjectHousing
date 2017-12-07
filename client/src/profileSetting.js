import React from 'react';
import {Jumbotron} from 'react-bootstrap';

class ProfileSetting extends React.Component{

    constructor(props){
        super(props);
        this.state = { isOpen : false };
    }

    componentWillMount(){
	console.log('setting props:',this.props);
    }

    render(){

        return(
		<Jumbotron>
                <h1 id="testt" >test setting</h1>
		</Jumbotron>

        );
    }
}

export default ProfileSetting;

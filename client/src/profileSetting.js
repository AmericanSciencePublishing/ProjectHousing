import React from 'react';
//import {Col,Row} from 'react-bootstrap';

class profileSetting extends React.Component{

    constructor(props){
        super(props);
        this.state = { isOpen : false };
    }

    componentWillMount(){
        console.log('setting test:',this.props.match.params);
    }

    render(){

        return(
                <h1>test setting</h1>

        );
    }
}

export default profileSetting;

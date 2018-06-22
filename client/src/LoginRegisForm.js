import React from 'react';
import {Modal, Tabs, Tab} from 'react-bootstrap';
import LogForm from './LogForm';
import RegForm from './RegForm';

import './css/Login.css';

class LoginRegisForm extends React.Component{
//one issue: the content in tabs will overlap with tabs without those <br/>
    constructor(props){
			super(props);
			this.state={
			    test1:""
			}
    }

    render (){
        return(
	    <div>
				<Modal bsSize="sm" show={this.props.show} onHide={this.props.onHide}>
					<Modal.Header closeButton>
					  <Modal.Title> Welcome  </Modal.Title>
					</Modal.Header>
					<Modal.Body style={{marginTop:"2rem"}}>
					  <Tabs defaultActiveKey={1} id="loginTabs">
			        <Tab eventKey={1} title="Sign in">
			          <LogForm sendUserToHome={this.props.sendUserToHome}/>
					    </Tab>
			        <Tab eventKey={2} title="New account">
					<RegForm sendUserToHome={this.props.sendUserToHome} /> </Tab>
					</Tabs>
					</Modal.Body>
					<Modal.Footer>
					</Modal.Footer>
	      </Modal>
	    </div>
        );
    }
}

export default LoginRegisForm;

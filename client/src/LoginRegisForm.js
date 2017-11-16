import React from 'react';
import {Modal, Tabs, Tab} from 'react-bootstrap';
import './Login.css';
import LogForm from './LogForm';
import RegForm from './RegForm';

class LoginRegisForm extends React.Component{
//one issue: the content in tabs will overlap with tabs without those <br/>

    render (){
        return(
        <div>
		<Modal show={this.props.show} onHide={this.props.onHide}>
            <Modal.Header closeButton>
              <Modal.Title> Welcome  </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{marginTop:"2rem"}}>
              <Tabs defaultActiveKey={1} id="loginTabs">
                <Tab eventKey={1} title="Sign in">
                <LogForm />
		</Tab>
                <Tab eventKey={2} title="New account">
		<RegForm /> </Tab>
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

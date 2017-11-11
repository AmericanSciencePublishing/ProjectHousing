import React from 'react';
import {Modal} from 'react-bootstrap';

export default ({show,onHide}) => {
    
    return (
	<div>
            <Modal show={show} onHide={onHide}>
	    <Modal.Header closeButton>
	    <Modal.Title> Login </Modal.Title>
	    </Modal.Header>
	    <Modal.Body>
	    <h1>test</h1>
	    <hr/>
	    </Modal.Body>

	    </Modal>
	</div>
	    
    )
};

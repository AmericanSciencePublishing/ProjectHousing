import React from 'react';
import {ListGroup, ListGroupItem, Panel, Modal, Button, ControlLabel, Glyphicon } from 'react-bootstrap';
//import { LinkContainer } from 'react-router-bootstrap';
//import history from './history';
import './MyProfileDetail.css';
var axios = require("axios");

class MyProfileDetail extends React.Component{

    constructor(props){
	super(props);
	this.state = { showModal: false,
                       user:{},
                       test:""
                     };
	this.open=this.open.bind(this);
	this.close=this.close.bind(this);
    }

    componentWillMount(){
	axios.get('/checkUser/').then (res=>{
	    console.log("ProfileDetail user information:",res);
            if(res.data === ""){
                console.log('no such session logged in');
            }
            else{
                this.setState({
                    user: res.data
                });
            }
        });
    }

    close() {
	this.setState({ showModal: false });
    }
    
    open() {
	this.setState({ showModal: true });
    }

    
    render(){

	const startDate = this.state.user.signupdate;

	return(
	    <div>
	    <div id="profilePanel" className="col-lg-8 col-md-12 col-sm-12 col-xs-12 resContainer">
		<ListGroup>
		<ListGroupItem bsClass="profileHeader" >
		<p>Hello! {this.state.user.userName} </p>
		</ListGroupItem>
		<div className="subItem">
		<ListGroupItem bsClass="profileSubItem">
                <ControlLabel className="subItemLable"><Glyphicon id="ProfileIcon"glyph="envelope" /></ControlLabel>
		<p className="subItemContent">{this.state.user.email}</p>
		<ControlLabel bsClass="subItemEditLable"><Glyphicon onClick={this.open} id="ProfileEditIcon" glyph="edit" /></ControlLabel>
		</ListGroupItem>
		</div>
		<div className="subItem">
		<ListGroupItem bsClass="profileSubItem">
                  <ControlLabel bsClass="subItemLable"><Glyphicon id="ProfileIcon" glyph="user" /></ControlLabel>
                  <p className="subItemContent" >Full Name (optional)</p>
                  <ControlLabel bsClass="subItemEditLable"><Glyphicon onClick={this.open} id="ProfileEditIcon" glyph="edit" /></ControlLabel>
                </ListGroupItem>
		</div>
		<div className="subItem">
		<ListGroupItem bsClass="profileSubItem">
                  <ControlLabel bsClass="subItemLable"><Glyphicon id="ProfileIcon" glyph="earphone" /></ControlLabel>
                  <p className="subItemContent" >Cell phone (optional)</p>
                  <ControlLabel bsClass="subItemEditLable"><Glyphicon onClick={this.open} id="ProfileEditIcon" glyph="edit" /></ControlLabel>
                </ListGroupItem>
		</div>
		<div className="subItem">
		<ListGroupItem bsClass="profileSubItem">
		<ControlLabel bsClass="subItemLable"><Glyphicon id="ProfileIcon" glyph="home" /></ControlLabel>
                <p className="subItemContent" >Address (optional)</p>
                <ControlLabel bsClass="subItemEditLable"><Glyphicon onClick={this.open} id="ProfileEditIcon" glyph="edit" /></ControlLabel>
                </ListGroupItem>
		</div>
		<div className="subItem">
                  <ListGroupItem bsClass="profileSubItem">
                    <ControlLabel bsClass="subItemLable"><Glyphicon id="ProfileIcon" glyph="file" /></ControlLabel>
                    <p className="subItemContent" >About Me</p>
                <ControlLabel bsClass="subItemEditLable"><Glyphicon onClick={this.open} id="ProfileEditIcon" glyph="edit" /></ControlLabel>
                  </ListGroupItem>
                </div>
		<Panel>
		  {this.state.user.bio===undefined?<p>Add a bio! Tell the community about yourself, your home, and your profession.</p>:this.state.user.bio}
		</Panel>

		<ListGroupItem bsClass="profileFooter" >
                <p>Member since: {startDate} </p>
                </ListGroupItem>
		</ListGroup>
	    </div>

	    <div>
	      <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

            <h4>Popover in a modal</h4>

            <h4>Tooltips in a modal</h4>

            <hr />

            <h4>Overflowing text to show scroll behavior</h4>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
	    </div>
	    </div>
		
	);
    }
}


export default MyProfileDetail;

import React from 'react';
import {ListGroup, ListGroupItem, Panel, Modal, Form, Button, ControlLabel, Glyphicon, FormControl, FormGroup, HelpBlock } from 'react-bootstrap';
//import { LinkContainer } from 'react-router-bootstrap';
import history from './history';
import './MyProfileDetail.css';
var axios = require("axios");

class MyProfileDetail extends React.Component{

    constructor(props){
	super(props);
	this.state = { showModal: false,
                       user:{},
                       test:"",
		       bioInput: "",
		       bioRemain : 300,
		       bioButtonState : false
		     };

	this.calculateBioRemain=this.calculateBioRemain.bind(this);
	this.handleBioChange=this.handleBioChange.bind(this);
	this.getBioValidationState=this.getBioValidationState.bind(this);
	this.openBio=this.openBio.bind(this);
	this.closeBio=this.closeBio.bind(this);
    }

    componentWillMount(){
	axios.get('/checkUser/').then (res=>{
	    console.log("ProfileDetail user information:",res);
            if(res.data === ""){
                console.log('no such session logged in, pushed to home');
		history.push('/');
            }
            else{
                this.setState({
                    user: res.data
                });
            }
        });
    }

    handleBioChange(e) {
	this.setState({ bioInput: e.target.value },this.calculateBioRemain);
    }

    calculateBioRemain(){
	const length = 300 - this.state.bioInput.length;
	this.setState({ bioRemain: length });
    }
    
    getBioValidationState() {
	const length = this.state.bioInput.length;
	if (length > 0&& length <280){
	    return 'success';
	}
	else if (length >= 280 && length<=300){
	    return 'warning';
	}
	else if (length > 300){
	    return 'error';
	}
	return null;
    }

    closeBio() {
	this.setState({ showBioModal: false });
    }
    
    openBio() {
	this.setState({ showBioModal: true });
    }

    handleBioSubmit(event){
	//	event.preventDefault();
	const length = this.state.bioInput.length;
	var newUserInfo={
		newBio:this.state.bioInput
	};
	if(length <= 300){
	    axios.put('/updatebio/'+this.state.user._id,newUserInfo);
	}
	return null;
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
                <ControlLabel bsClass="subItemEditLable"><Glyphicon onClick={this.openBio} id="ProfileEditIcon" glyph="edit" /></ControlLabel>
                  </ListGroupItem>
                </div>
		  <Panel id="biopanel">
		  {this.state.user.bio===""?<p>Add a bio! Tell the community about yourself, your home, and your profession.</p>:this.state.user.bio}
		  </Panel>
		<ListGroupItem bsClass="profileFooter" >
                <p>Member since: {startDate} </p>
                </ListGroupItem>
		</ListGroup>
	    </div>

	    <div>
	      <Modal show={this.state.showBioModal} onHide={this.closeBio}>
		<Modal.Header closeButton>
		</Modal.Header>
		<Modal.Body>
		  <Form onSubmit={event=>{this.handleBioSubmit(event);}}>
                    <FormGroup
                      validationState={this.getBioValidationState()}
                      >
                      <FormControl
			componentClass="textarea"
			style={{ height: 200 }}
                        type="text"
                        value={this.state.bioInput}
                        placeholder="Add a bio"
                        onChange={this.handleBioChange}
                        />
                      <FormControl.Feedback />
                      <HelpBlock>{this.state.bioRemain}/300</HelpBlock>
                    </FormGroup>
		    <Button
		      block
		      active
		      bsSize="large"
		      bsStyle="info"
		      type="submit"
		      disabled={this.state.bioButtonState}>
		      Submit
		    </Button>
                  </Form>
		</Modal.Body>
		<Modal.Footer>
		  <Button onClick={this.closeBio}>Close</Button>
		</Modal.Footer>
              </Modal>
	    </div>
	    </div>
		
	);
    }
}


export default MyProfileDetail;

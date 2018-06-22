import React from 'react';
import {ListGroup, ListGroupItem, Panel, Modal, Form, Button, ControlLabel, Glyphicon, FormControl, FormGroup, HelpBlock } from 'react-bootstrap';
//import { LinkContainer } from 'react-router-bootstrap';
import history from './history';

import './css/MyProfileDetail.css';

var axios = require("axios");

class MyProfileDetail extends React.Component{

    constructor(props){
	super(props);
	this.state = { showBioModal: false,
		       showInfoModal: false,
                       user:{},
	               test:"",
		       bioInput: "",
		       bioRemain : 300,
		       bioButtonState : false,
		       firstNameInput: "",
		       lastNameInput: "",
		       phoneInput: "",
		       emailInput:""
		     };

	this.calculateBioRemain=this.calculateBioRemain.bind(this);
	this.handleBioChange=this.handleBioChange.bind(this);
	this.getBioValidationState=this.getBioValidationState.bind(this);
	this.openBio=this.openBio.bind(this);
	this.closeBio=this.closeBio.bind(this);
	this.handleEmailChange=this.handleEmailChange.bind(this);
	this.handleFirstNameChange=this.handleFirstNameChange.bind(this);
	this.handleLastNameChange=this.handleLastNameChange.bind(this);
	this.handlePhoneChange=this.handlePhoneChange.bind(this);
        this.openInfo=this.openInfo.bind(this);
        this.closeInfo=this.closeInfo.bind(this);
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

    handleEmailChange(e){
	this.setState({ emailInput: e.target.value.toLowerCase() });
    }

    handleFirstNameChange(e){
        this.setState({ firstNameInput: e.target.value});
    }

    handleLastNameChange(e){
        this.setState({ lastNameInput: e.target.value});
    }

    handlePhoneChange(e){
        this.setState({ phoneInput: e.target.value});
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

    closeInfo() {
        this.setState({ showInfoModal: false });
    }

    openInfo() {
        this.setState({ showInfoModal: true });
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

    handleInfoSubmit(event){
        //      event.preventDefault();
        const phone = this.state.phoneInput;
	const firstname = this.state.firstNameInput;
	const lastname = this.state.lastNameInput;
	var emailRegex = /^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i;
	if(emailRegex.test(this.state.emailInput)){
	    const email = this.state.emailInput;
	    var newEmail={
		email : email
	     };
	    axios.put('/updateinfo/'+this.state.user._id,newEmail);
	}

	if(phone!==""){
            var newPhone={
                phone : phone
             };
            axios.put('/updateinfo/'+this.state.user._id,newPhone);
        }

	if(firstname!=="" && lastname!==""){
            var newName={
                firstname : firstname,
		lastname : lastname
             };
            axios.put('/updateinfo/'+this.state.user._id,newName);
        }

        return null;
    }


    render(){

	const startDate = this.state.user.signupdate;
	const bioString = this.state.user.bio;
	const firstnameString = this.state.user.firstname;
	const lastnameString = this.state.user.lastname;
	const phoneString = this.state.user.phone;

	return(
	    <div>
	    <div id="profilePanel" className="col-lg-8 col-md-12 col-sm-12 col-xs-12 resContainer">
		<ListGroup>
		<ListGroupItem bsClass="profileHeader" >
		<p>Hello! {this.state.user.username} </p>
		</ListGroupItem>
		<div className="subItem">
		<ListGroupItem bsClass="profileSubItem">
                <ControlLabel className="subItemLable"><Glyphicon id="ProfileIcon"glyph="envelope" /></ControlLabel>
		<p className="subItemContent">{this.state.user.email}</p>
		<ControlLabel bsClass="subItemEditLable"><Glyphicon onClick={this.openInfo} id="ProfileEditIcon" glyph="edit" /></ControlLabel>
		</ListGroupItem>
		</div>
		<div className="subItem">
		<ListGroupItem bsClass="profileSubItem">
                  <ControlLabel bsClass="subItemLable"><Glyphicon id="ProfileIcon" glyph="user" /></ControlLabel>
		{firstnameString===""?<p className="subItemContent" >Full name (optional)</p>: <p className="subItemContent" >{firstnameString} {lastnameString}</p>}
                  <ControlLabel bsClass="subItemEditLable"><Glyphicon onClick={this.openInfo} id="ProfileEditIcon" glyph="edit" /></ControlLabel>
                </ListGroupItem>
		</div>
		<div className="subItem">
		<ListGroupItem bsClass="profileSubItem">
                <ControlLabel bsClass="subItemLable"><Glyphicon id="ProfileIcon" glyph="earphone" /></ControlLabel>
		{phoneString===""?<p className="subItemContent" >Cell phone (optional)</p>: <p className="subItemContent" >{phoneString}</p>}
                  <ControlLabel bsClass="subItemEditLable"><Glyphicon onClick={this.openInfo} id="ProfileEditIcon" glyph="edit" /></ControlLabel>
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
		{bioString===""?<p>Add a bio! Tell the community about yourself, your home, and your profession.</p>:bioString}
		  </Panel>
		<ListGroupItem bsClass="profileFooter" >
                <p>Member since: {startDate} </p>
                </ListGroupItem>
		</ListGroup>
	    </div>


	    {/*show bio input modal*/}
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

	    {/*info input modal*/}
	    <div>
	      <Modal show={this.state.showInfoModal} onHide={this.closeInfo}>
		<Modal.Header closeButton>
		</Modal.Header>
		<Modal.Body>
		  <Form onSubmit={event=>{this.handleInfoSubmit(event);}}>
		    <div className="newUserInfoSubForm">
		      <ControlLabel bsClass="newUserInfoSubLabel">Email</ControlLabel>
                      <FormGroup bsClass="newUserInfoSubInput">
			<FormControl
                          type="email"
                          value={this.state.emailInput}
                          placeholder="Enter new email"
                          onChange={this.handleEmailChange}
                          />
                      </FormGroup>
		    </div>

		    <div className="newUserInfoSubForm">
		      <ControlLabel bsClass="newUserInfoSubLabel">Name</ControlLabel>
		      <div className="newUserInfoSubInputName">
		      <FormGroup bsClass="newUserInfoSubInputFirstName">
			<FormControl
			  type="text"
			  placeholder="First"
			  value={this.state.firstNameInput}
                          onChange={this.handleFirstNameChange}/>
		      </FormGroup>
		      <FormGroup bsClass="newUserInfoSubInputLastName">
			<FormControl
			  type="text"
                          placeholder="Last"
                          value={this.state.lastNameInput}
                          onChange={this.handleLastNameChange}/>
		      </FormGroup>
		      </div>
		    </div>

		    <div className="newUserInfoSubForm">
		      <ControlLabel bsClass="newUserInfoSubLabel">Phone</ControlLabel>
		      <FormGroup bsClass="newUserInfoSubInput">
			<FormControl
                          type="phone"
                          value={this.state.phoneInput}
                          placeholder="Enter new phone number"
                          onChange={this.handlePhoneChange}
                          />
                      </FormGroup>
		    </div>
		    <Button
		      block
		      active
		      bsSize="large"
		      bsStyle="info"
		      type="submit"
		      >
		      Submit
		    </Button>
		  </Form>
               	</Modal.Body>
		<Modal.Footer>
		  <Button onClick={this.closeInfo}>Close</Button>
		</Modal.Footer>
              </Modal>
	    </div>
	    </div>

	);
    }
}


export default MyProfileDetail;

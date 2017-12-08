import React from 'react';
import { Panel, ControlLabel, Glyphicon } from 'react-bootstrap';
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
    render(){
	const title = (
	    <h3>Hello, {this.state.user.userName}</h3>
	);
	return(
	    <div id="profilePanel" className="col-lg-8 col-md-12 col-sm-12 col-xs-12 resContainer">
	      <Panel header={title} bsStyle="info">
		<div className="profileSubItem">
                  <ControlLabel className="subItemLable"><Glyphicon id="ProfileIcon"glyph="envelope" /></ControlLabel>
		  <p className="subItemContent">{this.state.user.email}</p>
		  <ControlLabel bsClass="subItemEditLable"><Glyphicon id="ProfileIcon" glyph="edit" /></ControlLabel>
                </div>
		<div className="profileSubItem">
                  <ControlLabel bsClass="subItemLable"><Glyphicon id="ProfileIcon" glyph="user" /></ControlLabel>
                  <p className="subItemContent" >Full Name (optional)</p>
                  <ControlLabel bsClass="subItemEditLable"><Glyphicon id="ProfileIcon" glyph="edit" /></ControlLabel>
                </div>
		<div className="profileSubItem">
                  <ControlLabel bsClass="subItemLable"><Glyphicon id="ProfileIcon" glyph="earphone" /></ControlLabel>
                  <p className="subItemContent" >Cell phone (optional)</p>
                  <ControlLabel bsClass="subItemEditLable"><Glyphicon id="ProfileIcon" glyph="edit" /></ControlLabel>
                </div>
		<div className="profileSubItem">
		  <ControlLabel bsClass="subItemLable"><Glyphicon id="ProfileIcon" glyph="home" /></ControlLabel>
                  <p className="subItemContent" >Address (optional)</p>
                  <ControlLabel bsClass="subItemEditLable"><Glyphicon id="ProfileIcon" glyph="edit" /></ControlLabel>
                </div>
	      </Panel>
	    </div>
	);
    }
}


export default MyProfileDetail;

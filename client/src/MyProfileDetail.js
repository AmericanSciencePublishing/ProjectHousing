import React from 'react';
import { Panel, ControlLabel, Row, Glyphicon } from 'react-bootstrap';
//import { LinkContainer } from 'react-router-bootstrap';
//import history from './history';
import './MyProfileDetail.css';
var axios = require("axios");

class MyProfileDetail extends React.Component{

    constructor(props){
	super(props);
	console.log("details:",this.props);
    }

    render(){
	const title = (
	    <h3>Profile Information</h3>
	);
	return(
	    <div id="profilePanel" className="col-lg-8 col-md-12 col-sm-12 col-xs-12 resContainer">
	      <Panel header={title} bsStyle="info">
		<div className="profileSubItem">
		  <ControlLabel bsClass="subItemLable"><Glyphicon glyph="user" /></ControlLabel>
		  <p className="subItemContent" >sihan</p>
		  <ControlLabel bsClass="subItemEditLable"><Glyphicon glyph="edit" /></ControlLabel>
		</div>
		<div className="profileSubItem">
                  <ControlLabel className="subItemLable"><Glyphicon glyph="envelope" /></ControlLabel>
		  <p className="subItemContent">zhsh111@gmail.com</p>
		  <ControlLabel bsClass="subItemEditLable"><Glyphicon glyph="edit" /></ControlLabel>
                </div>
		<div className="profileSubItem">
                  <ControlLabel bsClass="subItemLable"><Glyphicon glyph="earphone" /></ControlLabel>
                  <p className="subItemContent" >3128566884</p>
                  <ControlLabel bsClass="subItemEditLable"><Glyphicon glyph="edit" /></ControlLabel>
                </div>
		<div className="profileSubItem">
		  <ControlLabel bsClass="subItemLable"><Glyphicon glyph="home" /></ControlLabel>
                  <p className="subItemContent" >address</p>
                  <ControlLabel bsClass="subItemEditLable"><Glyphicon glyph="edit" /></ControlLabel>
                </div>
	      </Panel>
	    </div>
	);
    }
}


export default MyProfileDetail;

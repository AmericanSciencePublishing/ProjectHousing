import React from 'react';
import {
  Checkbox,
  ButtonGroup,
  ButtonToolbar,
  Button,
  Form,
  FormGroup,
  FormControl
} from 'react-bootstrap';
import './css/LogForm.css';
import history from './history';
import { connect } from 'react-redux';
import { set_username } from './actions';
import * as UserAPI from './utils/UserAPI';

class RegForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      //	    password:"",
      password1: '',
      password2: '',
      passwordMSG: '',
      confirmPassword: '',
      submitMSG: '',
      inputValEmail: null,
      inputValPass1: null,
      inputValPass2: null,
      isLoading: false
      //In the future, can use this feature to control loading feedback icon.
    };

    this.changeEmailValState = this.changeEmailValState.bind(this);
    this.changePass1ValState = this.changePass1ValState.bind(this);
    this.changePass2ValState = this.changePass2ValState.bind(this);
    this.getEmail = this.getEmail.bind(this);
    this.getPassword1 = this.getPassword1.bind(this);
    this.getPassword2 = this.getPassword2.bind(this);
    this.comparePasswords = this.comparePasswords.bind(this);
  }

  getPassword1(event) {
    let pass1 = event.target.value.trim();
    this.setState(
      {
        password1: pass1
      },
      this.changePass1ValState
    );
  }

  getPassword2(event) {
    let pass2 = event.target.value.trim();
    this.setState(
      {
        password2: pass2
      },
      this.changePass2ValState
    );
  }

  comparePasswords(pass1, pass2) {
    if (pass1 !== pass2) {
      this.setState({
        passwordMSG: 'Password Must Match'
      });
      return false;
    } else if (pass1 === pass2) {
      this.setState({
        //		password:pass1,
        passwordMSG: 'Passwords Match'
      });
      //	    console.log(this.state.password);
      return true;
    }
  }

  //in getEmail(), the setState use callback style format to set state.email immediately, because standard setState() does not always immediately update the componen. check here for more info :https://stackoverflow.com/questions/46867483/react-state-not-rendering-in-real-time

  getEmail(event) {
    this.setState(
      {
        email: event.target.value.toLowerCase()
      },
      this.changeEmailValState
    );
  }

  changePass1ValState() {
    this.setState({
      inputValPass1: this.state.password1 === '' ? null : 'success'
    });
  }

  changePass2ValState() {
    if (
      this.state.password1 === this.state.password2 &&
      this.state.password2 !== ''
    ) {
      this.setState({
        inputValPass2: 'success',
        passwordMSG: 'Passwords Match'
      });
    } else if (this.state.password2 === '') {
      this.setState({
        inputValPass2: null
      });
    } else {
      this.setState({
        inputValPass2: 'warning',
        passwordMSG: 'Password Must Match'
      });
    }
  }
  //using regExp to verify an email address
  //    const emailRegex = /^\S+@\S+\.\S+$/;
  changeEmailValState() {
    var emailRegex = /^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i;
    if (emailRegex.test(this.state.email)) {
      this.setState({
        inputValEmail: 'success'
        //		inputValEmail: this.state.email===""? null:"success"
      });
    } else {
      this.setState({
        inputValEmail: this.state.email === '' ? null : 'warning'
      });
    }
  }

  //checkState
  checkState() {
    if (this.state.password1 && this.state.password2 && this.state.email) {
      return true;
    } else {
      this.setState({
        submitMSG: ' All fields must be filled out'
      });
      return false;
    }
  }

  //handle submit
  //!!!future
  //use a para(let in render()) to control if check as a landlord

  handleSubmit(event) {
    event.preventDefault();
    var passwordComparison = this.comparePasswords(
      this.state.password1,
      this.state.password2
    );
    var everythingFilledOut = this.checkState();
    //checkState() may not useful right now, but maybe useful in the future, to check everything has been filled out.
    this.setState({
      isLoading: true
    });
    if (passwordComparison && everythingFilledOut) {
      console.log('POSTING USER DATA');
      var newUserInfo = {
        email: this.state.email,
        password1: this.state.password1,
        password2: this.state.password2
      };
      //	    console.log(newUserInfo);
      UserAPI
        .sign(newUserInfo)
        .then(res => {
          console.log('registration res', res);
          if (!res.data.code) {
            this.setState({
              submitMSG: 'Sign up successfully!',
              isLoading: false
            });

            this.props.dispatch(set_username(res.data.username));
            this.props.sendUserToHome(res.data);
            UserAPI.put(res.data._id);
            history.push('/');
            //	    this.context.router.history.push("/faq")
            //		    console.log("sign up seccessfully!",res);
          }
          if (res.data.code === 11000) {
            this.setState({
              submitMSG: 'Email Address Already in Use',
              isLoading: false
            });
            //                    console.log("Email Address Already in Use",res);
          }
        })
        .catch(err => {
          console.log(err);
          this.setState({
            submitMSG: 'Network Error',
            isLoading: false
          });
        });
    } else {
      this.setState({
        submitMSG: "Can't submit, Check User Info",
        isLoading: false
      });
    }
  }

  render() {
    return (
      <div>
        <Form
          id="formInput2"
          onSubmit={event => {
            this.handleSubmit(event);
          }}
          horizontal
          style={{ marginTop: '2rem' }}
        >
          {/* input e-mail */}

          <FormGroup validationState={this.state.inputValEmail} bsSize="large">
            <FormControl
              required
              autoFocus
              type="email"
              id="regformEmail"
              onChange={this.getEmail}
              placeholder="Enter Email"
            />
            <FormControl.Feedback />
          </FormGroup>

          {/*input password */}
          <FormGroup validationState={this.state.inputValPass1} bsSize="large">
            <FormControl
              required
              onChange={this.getPassword1}
              type="password"
              id="regformPassword"
              placeholder="Creat Password"
            />
            <FormControl.Feedback />
          </FormGroup>

          {/*confirm password*/}

          <FormGroup validationState={this.state.inputValPass2} bsSize="large">
            <FormControl
              required
              onChange={this.getPassword2}
              type="password"
              id="regPwd2"
              placeholder="Re-enter your Password"
            />
            <FormControl.Feedback />
          </FormGroup>

          {/*checkbox for landlord */}


		<FormGroup>
		<Checkbox> I am a landlord or industry professional</Checkbox>
		</FormGroup>

		{/*submit button*/}
		<FormGroup>
		<ButtonToolbar justified='true'>
		<ButtonGroup >
		<Button
		  block
		  active
		  id="regSubButton"
		  bsSize="large"
		  bsStyle="info"
           	  type="submit"
		  disabled={this.state.isLoading}
		  >
		  Submit
		</Button>
		</ButtonGroup>
		<div className="inline_tips"><p>I accept </p><Button bsClass="termofuse_tip" href="/terms" target='_blank' bsStyle="link">Terms of Use</Button></div>
		</ButtonToolbar>
		</FormGroup>
		<p align="center" style={{color: this.state.submitMSG === "Sign up successfully!" ? '#4caf50': "#f44336"}} id="submitTip">{this.state.submitMSG}</p>
		</Form>
		</div>


    );
  }
}
export default connect()(RegForm);

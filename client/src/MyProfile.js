import React from 'react';
import './css/MyProfile.css';
//import history from './history';
import MyProfileDetail from './MyProfileDetail';
import ThumbnailList from './ThumbnailList';
import { Nav, NavItem  } from 'react-bootstrap';
import {Route, Switch} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import Loading from 'react-loading'
import parseHouseDocument from './parseHouseDocument';
import Footer from './Footer';
import * as UserAPI from './utils/UserAPI';
import * as HouseAPI from './utils/HouseAPI';


class MyProfile extends React.Component{

    constructor(props){
			super(props);
			this.state = {
				user:{},
				savedHouse:null,
				loading:false,
			};
    }

    componentWillMount(){
    	this.setState({loading:true})
			UserAPI.checkUser().then( res => {
        if(res.data === ""){
            console.log('no such session logged in');
        }
        else{
            this.setState({
                user: res.data,
            });
            HouseAPI.getList(res.data.saved_houses).then(res =>{
            	if(res.data === ""){
			          console.log('no saved houses');
			        }else{
			        	this.setState({
				    			savedHouse: parseHouseDocument(res.data),
				    			loading:false,
				    		});
				    		console.log(this.state.savedHouse);
			        }
			    	})
						console.log('profile user check:',this.state.user);
        }
      });
      			console.log('MyProfile props',this.props);

    }


    render(){
    	const {savedHouse,loading} = this.state
			return(
			    <div>
				<div className="profileTabs container">
				  <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 resContainer">
				    <Nav bsStyle="tabs" >
				      <LinkContainer exact to={`/user/${this.state.user.username}`}>
					<NavItem > My Profile</NavItem>
				      </LinkContainer>
				      <LinkContainer exact to={`/user/${this.state.user.username}/save`}>
					<NavItem > Saved </NavItem>
		                      </LinkContainer>
				      <LinkContainer exact to={`/user/${this.state.user.username}/setting`}>
					<NavItem > Settings</NavItem>
		                      </LinkContainer>

				    </Nav>
				    </div>
			      <Switch>
		                <Route exact path="/user/:username" component={MyProfileDetail} />
		                <Route exact path="/user/:username/save"  render={(routeProps) => (
		                	<div id="savedPanel" className="col-lg-8 col-md-12 col-sm-12 col-xs-12 resContainer profile-tab">
		                	{loading === true ?
		                		<Loading delay={200} type='spin' color='#222' className='loading'/>:
		                		<ThumbnailList houseList={savedHouse} />
		                	}
											</div>
											)}/>
		                <Route exact path="/user/:username/setting" component={NoMatch}/>
		                <Route component={NoMatch}/>
		                    </Switch>
				</div>
				<Footer />
				</div>

			);
    }
}

const NoMatch = ({ location }) => (
        <div>
        <h3>No match for <code>{location.pathname}</code></h3>
        </div>
);

export default MyProfile;

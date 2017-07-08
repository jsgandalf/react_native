import React, { Component } from 'react';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';

import LoginScreen from './LoginScreen';
import SecondScreen from './SecondScreen';
import LoginStore from '../stores/LoginStore'

export default class Main extends Component {
	constructor(){
		super();
		this.state = this._getLoginState();
		//this.state = {userLoggedIn: true};
		console.log(this.state.userLoggedIn)
		

	}

	getState(){
		return LoginStore.getCache().then((response)=> {
			if(response){
				console.log(response);
				this.state.userLoggedIn = true;
			}
			console.log(this.state.userLoggedIn)
			return this.state.userLoggedIn;
		});
	}

	_getLoginState() {
		return {
			userLoggedIn: LoginStore.isLoggedIn()
		};
	}
	componentDidMount() {
		this.changeListener = this._onChange.bind(this);
		LoginStore.addChangeListener(this.changeListener);
	}
	_onChange() {
		this.setState(this._getLoginState());
	}
	componentWillUnmount() {
		LoginStore.removeChangeListener(this.changeListener);
	}

  render() {
  	if (this.state.userLoggedIn) {
		  return (
		    <Router>
		      <Scene key="root">
		        <Scene key="loginScreen"
		          component={LoginScreen}
		        	animation='fade'
		          hideNavBar={true}
		          initial={true}
		        />
		        <Scene key="secondScreen"
		          component={SecondScreen}
		          animation='fade'
		          hideNavBar={true}
		        />
		      </Scene>
		    </Router>
		  );
	  } else {
	  	return (
		  	<Router>
			      <Scene key="root">
			        <Scene key="loginScreen"
			          component={LoginScreen}
			        	animation='fade'
			          hideNavBar={true}
			          
			        />
			        <Scene key="secondScreen"
			          component={SecondScreen}
			          animation='fade'
			          hideNavBar={true}
			          initial={true}
			        />
			      </Scene>
			    </Router>
			  )
	  }
	}
}
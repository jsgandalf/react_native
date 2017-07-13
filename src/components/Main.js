import React, { Component } from 'react';
import {
	StyleSheet
} from 'react-native';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';

import LoginScreen from './LoginScreen';
import SecondScreen from './SecondScreen';
import ViewModule from './ViewModule';
import LoadingScreen from './LoadingScreen';
import LoginStore from '../stores/LoginStore';
import AuthService from '../services/AuthService';

export default class Main extends Component {
	constructor(){
		super();
		this.state = this._getLoginState();
	}

	getState(){
		return LoginStore.getCache().then((response)=> {
			if(response){
				AuthService.state.apiKey = response.apiKey;
				this.state.userLoggedIn = true;
				Actions.secondScreen();
			}else{
				Actions.loginScreen()
				return this.state.userLoggedIn;
			}	
		});
	}

	_getLoginState() {
		return {
			userLoggedIn: LoginStore.isLoggedIn()
		};
	}
	componentDidMount() {
		this.getState();
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
	  	return (
		  	<Router>
			      <Scene key="root">
			        <Scene key="loadingScreen"
			          component={LoadingScreen}
			        	animation='fade'
			          hideNavBar={true}
			          initial={true}
			        />
			        <Scene key="loginScreen"
			          component={LoginScreen}
			        	animation='fade'
			          hideNavBar={true}
			        />
			        <Scene key="secondScreen"
			          component={SecondScreen}
			          animation='fade'
			          hideNavBar={true}
			        />
			        
				        <Scene key="viewModule"
				          component={ViewModule}
				          animation='fade'
				          hideNavBar={true}
				        />
			        
			      </Scene>
			    </Router>
			  )
	}
}

let style = StyleSheet.create({
    tabBarStyle: {
        borderTopWidth : .5,
        borderColor    : '#b7b7b7',
        backgroundColor: 'white',
        opacity        : 1
    }
});
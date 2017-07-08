import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Image,
	TouchableOpacity,
	Animated,
	Easing
} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';

import arrowImg from '../images/left-arrow.png';
import AuthService from '../services/AuthService';
import Modules from './Modules';
import LoginStore from '../stores/LoginStore'

const SIZE = 40;

export default class SecondScreen extends Component {
	constructor() {
		super();

		this.state = {
			isLoading: false,
			university: {}
		};

		this._onPress = this._onPress.bind(this);
		this.growAnimated = new Animated.Value(0);
		this.getUniversity()
			.then(university => {this.state.university = university;})
			.catch(e => { console.log(e); });
		LoginStore.getCache().then((response)=> console.log(response));

	}
	getUniversity(){
		return fetch('https://app.leadexperiments.com/api/university/5911fea2f75eda1200ab52bd?access_token='+AuthService.state.apiKey, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
  	  .then(this.handleErrors)
      .then(response => { return response.json(); })
	}

	_onPress() {
		if (this.state.isLoading) return;

		this.setState({ isLoading: true });

		Animated.timing(
			this.growAnimated,
			{
				toValue: 1,
				duration: 300,
				easing: Easing.linear,
			}
		).start();

		setTimeout(() => {
			Actions.pop();
		}, 500);
	}

	render() {
		const changeScale = this.growAnimated.interpolate({
			inputRange: [0, 1],
			outputRange: [1, SIZE],
		});

		return (
			<View style={styles.container}>
				<Modules university={this.state.university}></Modules>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 20,
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		width: SIZE,
		height: SIZE,
		borderRadius: 100,
		zIndex: 99,
		backgroundColor: '#F035E0',
	},
	circle: {
		height: SIZE,
		width: SIZE,
		marginTop: -SIZE,
		borderRadius: 100,
		backgroundColor: '#F035E0',
	},
	image: {
		width: 24,
		height: 24,
	}
});
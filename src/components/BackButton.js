import React, { Component } from 'react';
import {
	Image,
	View,
	StyleSheet,
	TouchableOpacity
} from 'react-native';
import ButtonSubmitSignup from './ButtonSubmitSignup';
import SignupSection from './SignupSection';
import { Actions } from 'react-native-router-flux';
import arrowImg from '../images/left-arrow.png';

export default class BackButton extends Component {
	_onPress(){
		Actions.loginScreen();
	}


	render() {
		return (
				
					<TouchableOpacity onPress={this._onPress}
						style={styles.button}
						>
						<Image style={styles.image} source={arrowImg} />
					</TouchableOpacity>
				
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
	image: {
		width: 33,
		height: 33,
		justifyContent: 'flex-end',
	}
});
import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Image,
	TouchableOpacity,
	Animated,
	Easing,
	Text
} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';

import arrowImg from '../images/left-arrow.png';
import AuthService from '../services/AuthService';
import Modules from './Modules';
import LoginStore from '../stores/LoginStore'

const SIZE = 40;
import logoImg from "../images/loading.gif";

export default class SecondScreen extends Component {

	render() {

		return (
			<View style={styles.container}>
				<Text style={styles.text}>Loading</Text>
				<Image source={logoImg} style={styles.image} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	text:{
		color:'black',
		fontSize:40,
		textAlign: 'center'
	},
	container: {
		flex: 2,
		margin: 20,
		backgroundColor:'white',
		justifyContent: 'center',
    alignItems: 'center',
		
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
		width: 32,
		height: 32
	}
});
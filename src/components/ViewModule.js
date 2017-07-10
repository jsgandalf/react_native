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
import LoginStore from '../stores/LoginStore';
import UniversityService from '../services/UniversityService';

const SIZE = 40;

export default class SecondScreen extends Component {
	constructor(props) {
		super(props);
		console.log(props)
		this.state = {
			university: UniversityService.state.university
		};
	}

	
	render() {
		return (
			<View style={styles.container}>
				<Text>{this.props.moduleId}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 20,
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
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
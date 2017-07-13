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
import LoginStore from '../stores/LoginStore';
import UniversityService from '../services/UniversityService';

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
				<Modules></Modules>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
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
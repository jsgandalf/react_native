import React, { Component, PropTypes } from 'react';
import Logo from '../Logo';
import ForgotForm from './ForgotForm';
import Wallpaper from '../Wallpaper';
import ButtonSubmitForgot from './ButtonSubmitForgot';
import BackButton from '../BackButton';
import {
	View,
	StyleSheet
} from 'react-native';

export default class LoginScreen extends Component {
	render() {
		return (
			<Wallpaper>
				<Logo />
				<ForgotForm />
				<ButtonSubmitForgot/>
				<View style={styles.container}>
					<BackButton />
				</View>
			</Wallpaper>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 20,
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
	}
});
import React, { Component, PropTypes } from 'react';
import Logo from './Logo';
import SignupForm from './SignupForm';
import Wallpaper from './Wallpaper';
import ButtonSubmitSignup from './ButtonSubmitSignup';
import SignupSection from './SignupSection';
import BackButton from './BackButton';
import {
	View,
	StyleSheet
} from 'react-native';

export default class LoginScreen extends Component {
	render() {
		return (
			<Wallpaper>
				<Logo />
				<SignupForm />
				<ButtonSubmitSignup/>
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
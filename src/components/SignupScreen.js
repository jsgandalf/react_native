import React, { Component, PropTypes } from 'react';
import Logo from './Logo';
import SignupForm from './SignupForm';
import Wallpaper from './Wallpaper';
import ButtonSubmitSignup from './ButtonSubmitSignup';
import SignupSection from './SignupSection';

export default class LoginScreen extends Component {
	render() {
		return (
			<Wallpaper>
				<Logo />
				<SignupForm />
				<ButtonSubmitSignup/>
				<SignupSection/>
			</Wallpaper>
		);
	}
}

import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
	StyleSheet,
	KeyboardAvoidingView,
	View,
	ActivityIndicator,
	TouchableOpacity,
	Image,
} from 'react-native';

import UserInput from '../UserInput';
import usernameImg from '../../images/username.png';
import passwordImg from '../../images/password.png';
import eyeImg  from '../../images/eye_black.png';
import AuthService from '../../services/AuthService';


export default class SignupForm extends Component {
	constructor(props) {
    super(props);
    this.state = {
			showPass: true,
			press: false
		};
		this.showPass = this.showPass.bind(this);
	}

	showPass() {
  this.state.press === false ? this.setState({ showPass: false, press: true }) :this.setState({ showPass: true, press: false });
  }

	render() {
		return (
			<KeyboardAvoidingView behavior='padding'
				style={styles.container}>
				<UserInput source={usernameImg}
					onChangeText={(email) => {AuthService.state.email = email;} }
					value={this.state.email}
					placeholder='Email'
					autoCapitalize={'none'}
					returnKeyType={'done'}
					autoCorrect={false} />
			</KeyboardAvoidingView>
		);
	}
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
	
	container: {
		flex: .5,
		alignItems: 'center'		
	},
	btnEye: {
    position: 'absolute',
    top: 55,
    right: 28,
  },
  iconEye: {
    width: 25,
    height: 25,
    tintColor: 'rgba(0,0,0,0.2)',
  },
});

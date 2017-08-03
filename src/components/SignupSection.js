import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import { Actions } from 'react-native-router-flux';
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,	
	TouchableHighlight,
	Linking
} from 'react-native';

export default class SignupSection extends Component {

 _goToURL(url) {
  	Linking.openURL(url).catch(err => console.error('An error occurred', err));

  }
  _goToSignup(){
  	Actions.signupScreen();
  	//Linking.openURL("https://leadexperiments.com").catch(err => console.error('An error occurred', err));
  }

  _goToForgotPassword(){
  	Actions.forgotPassword();
  	//Linking.openURL("https://app.leadexperiments.com/forgotpassword").catch(err => console.error('An error occurred', err));
  }

	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity onPress={this._goToSignup}>
					<View>
						<Text style={styles.text}>Signup</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={this._goToForgotPassword}>
					<View>
						<Text style={styles.text} >Forgot Password</Text>
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
	image:{
		width: 40,
		height: 40,
		zIndex: 200
	},
	container: {
		flex: 1,
		top: -55,
		width: DEVICE_WIDTH,
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	text: {
		color: 'white',
		backgroundColor: 'transparent',
	},
});

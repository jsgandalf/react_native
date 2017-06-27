import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
} from 'react-native';

import logoImg from '../images/logo.png';


//<Image source={logoImg} style={styles.image} />
export default class Logo extends Component {
	render() {
		return (
			<View style={styles.container}>

				<Text style={styles.text}>LEAD EXPERIMENTS</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 3,
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		width: 80,
		height: 80,
	},
	text: {
		fontSize:30,
		color: 'white',
		fontWeight: 'bold',
		backgroundColor: 'transparent',
		marginTop: 20,
		textAlign: 'center'
	}
});

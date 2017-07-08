import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Image,
	TouchableOpacity,
	FlatList,
	Animated,
	Text,
	Easing
} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';

const SIZE = 40;

export default class Modules extends Component {
	constructor() {
		super();
	}

	render() {

		return (
			<View style={styles.container}>
				<Text>hello, {this.props.university.modules}</Text>
				<FlatList
				  data={this.props.university.modules}
				  renderItem={({item}) => <ListItem title={item.name} />}
				/>
			</View>
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
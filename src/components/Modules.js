import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Image,
	TouchableOpacity,
	FlatList,
	ListItem,
	Animated,
	Text,
	Easing
} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import UniversityService from "../services/UniversityService"

const SIZE = 40;

export default class Modules extends Component {
	constructor() {
		super();
		this.state = {
			university: {}
		}
		//this.getUniversity();

	}

	componentWillMount(){
		this.getUniversity();
	}

	setUniversityState(university) {
    this.setState({
      university: university
    });
  }

	getUniversity(){
		UniversityService.getUniversity()
			.then(university => {console.log(university); this.setUniversityState(university); })
			.catch(e => { console.log(e); });
	}

	render() {

		return (
			<View style={styles.container}>
				<Text>hello</Text>
				<FlatList
				  data={this.state.university.modules}
				  renderItem={({item}) => <Text>{item.name}</Text>}
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
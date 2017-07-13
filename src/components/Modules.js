import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Image,
	TouchableOpacity,
	List,
	ScrollView,
	FlatList,
	Animated,
	Text,
	Easing
} from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements'
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
		if(Object.keys(this.state.university).length === 0 && this.state.university.constructor === Object){
			UniversityService.getUniversity()
				.then(university => {this.setUniversityState(university); })
				.catch(e => { console.log(e); });
		}
	}

	render() {

		return (
			<View style={styles.container}>
				<FlatList
					keyExtractor={item => item._id}
				  data={this.state.university.modules}
				  renderItem={({item}) => (
				  	<Card
				  		containerStyle={styles.containerStyle}
						  title={item.name}
						  image={{uri:item.imgThumb}} 
						  >
						  <Text style={{marginBottom: 10}}>
						    {item.description}
						  </Text>
						  <Button
						    onPress={()=> Actions.viewModule({moduleId: item._id}) }
						    backgroundColor='#03A9F4'
						    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
						    title='VIEW NOW' />
						</Card>
			  	)}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	containerStyle:{
		margin: 25
	},
	container: {
		display:'flex',
		flexWrap: 'wrap'
	},
	image: {
		width: 24,
		height: 24,
	}
});
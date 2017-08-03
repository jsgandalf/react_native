import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Image,
	TouchableOpacity,
	Animated,
	Easing,
	Text,
	WebView,
	ScrollView,
	TouchableHighlight
} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';

import YouTube from 'react-native-youtube'
import AuthService from '../services/AuthService';
import Modules from './Modules';
import LoginStore from '../stores/LoginStore';
import UniversityService from '../services/UniversityService';

import { Header, Icon } from 'react-native-elements'
import HTMLView from 'react-native-htmlview';
import MyTabbar from './MyTabbar';

import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon2 from 'react-native-vector-icons/MaterialIcons'


const SIZE = 40;


export default class ViewModule extends Component {
	constructor(props) {
		super(props);
		this.state = {
			university: UniversityService.state.university,
			module: {},
			section: {},
			showVideoPlayer: false
		};
		this.state.module = this.state.university.modules.filter((module) => {return module._id == this.props.moduleId })[0];
		if(!this.props.sectionId && this.state.module.sections && this.state.module.sections.length > 0){
			this.props.sectionId = this.state.module.sections[0]._id;
			this.state.section = this.state.module.sections[0];
		}
		if(this.props.sectionId){
			this.state.section = this.state.module.sections.filter((section) => {return section._id == this.props.sectionId })[0];
		}
		if(!this.props.lessonId && this.state.section.lessons && this.state.section.lessons.length > 0){
			this.props.lessonId = this.state.section.lessons[0]._id;
			this.state.lesson = this.state.section.lessons[0];
			this.state.lesson.description = this.removeBreaks(this.state.lesson.description);
		}
		if(this.props.lessonId){
			this.state.lesson = this.state.section.lessons.filter((lesson) => {return lesson._id == this.props.lessonId })[0];
		}
		if(this.state.lesson.video){
			this.state.showVideoPlayer = true;
		}
		
	}

	removeBreaks(description){
		return description.replace(/\<br\/\>/g, "").replace(/\<p\>\<\/p\>/g, "").replace(/\<\/li\>/g, "</li><br />");
	}

	onClosePressed() {
    this.setState({showVideoPlayer: false});
  }

	getCount(arry, _id){
		returnCount = 1;
		arry.forEach(function(elem, i){
			if(elem._id == _id){
				returnCount = i + 1;
			}
		});
		return returnCount;
	}

	getPrev(that){
		let lessonIndex = that.getCount(that.state.section.lessons, that.props.lessonId); //gets the next lesson position
		let sectionIndex = that.getCount(that.state.module.sections, that.props.sectionId); //gets the next section position
		if(lessonIndex - 1 > 0) {
			//Increaes lessons by 1 and just get the next lesson within this section
			Actions.viewModule({ moduleId: that.props.moduleId, sectionId: that.props.sectionId, lessonId: that.state.section.lessons[lessonIndex - 2]._id })
		} else if(sectionIndex -1 > 0) {
			Actions.viewModule({ moduleId: that.props.moduleId, sectionId: that.state.module.sections[sectionIndex-2]._id, lessonId: that.state.module.sections[sectionIndex-2].lessons[that.state.module.sections[sectionIndex-2].lessons.length -1]._id });
		} else{
			//Finish the module?
			Actions.secondScreen();
		}
	}

	getNext(that){
		let lessonIndex = that.getCount(that.state.section.lessons, that.props.lessonId);
		let sectionIndex = that.getCount(that.state.module.sections, that.props.sectionId);
		if(lessonIndex < that.state.section.lessons.length) {
			//Increaes lessons by 1 and just get the next lesson within this section
			Actions.viewModule({ moduleId: that.props.moduleId, sectionId: that.props.sectionId, lessonId: that.state.section.lessons[lessonIndex]._id })
		} else if(sectionIndex < that.state.module.sections.length) {
			Actions.viewModule({ moduleId: that.props.moduleId, sectionId: that.state.module.sections[sectionIndex]._id });
		} else{
			//Finish the module?
			Actions.secondScreen();
		}
	}

	/*
	<Header
					backgroundColor="#03a9f4"
				  leftComponent={this.renderLeftComponent()}
				  centerComponent={this.renderCenterComponent()}
				  rightComponent={this.renderRightComponent()}
				/>
	*/

  renderCenterComponent(){
		return { 
			text: "Section " + this.getCount(this.state.module.sections, this.props.sectionId) + " » Lesson " + this.getCount(this.state.section.lessons, this.props.lessonId),
			style: { color: '#FFF', fontWeight: 'bold' }
		};
  }
  renderLeftComponent(){
		return (
			<Icon name='navigate-before'
				color="#FFF"
				iconStyle={styles.icon}
				onPress={() => this.getPrev(this)}
			/>
		);
  }
  renderRightComponent(){
		return (
			<Icon name='navigate-next'
				color="#FFF"
				iconStyle={styles.icon}
				onPress={() => this.getNext(this)}
			/>
		);
  }
  actionTab(pressed){
  	if(pressed == 0){
  		this.getPrev(this);
  	}else if(pressed == 2){
  		this.getNext(this);
  	}else{
  		Actions.secondScreen();
  	}
  }
	render() {

		return (
			<View>
			<ScrollView style={styles.container}>
				<Header
					backgroundColor="#03a9f4"
				  
				  centerComponent={this.renderCenterComponent()}
				  
				/>
				<View style={styles.container2}>

					<Text style={styles.h1}>{this.state.lesson.name}</Text>
					{this.state.showVideoPlayer &&
						<YouTube
						  videoId={this.state.lesson.video}   // The YouTube video ID 
						  play={false}             // control playback of video with true/false 
						  fullscreen={true}       // control whether the video should play in fullscreen or inline 
						  loop={true}             // control whether the video should loop when ended 
						 
						  onReady={e => this.setState({ isReady: true })}
						  onChangeState={e => this.setState({ status: e.state })}
						  onChangeQuality={e => this.setState({ quality: e.quality })}
						  onError={e => this.setState({ error: e.error })}
						 
						  style={{ alignSelf: 'stretch', height: 300, marginBottom: 20 }}
						/>}
					<HTMLView
		        value={this.state.lesson.description}
		        stylesheet={stylesHTML}
		      />
				</View>

			</ScrollView>
			
			<BottomNavigation
        labelColor="white"
        rippleColor="white"
        style={{ height: 56, elevation: 8, position: 'absolute', left: 0, bottom: 0, right: 0 }}
        onTabChange={(newTabIndex) => this.actionTab(newTabIndex)}
      >
        <Tab
          barBackgroundColor="#37474F"
          label="Prev"
          icon={<Icon size={24} color="white" name="chevron-left" />}
        />
        <Tab
          barBackgroundColor="#37474F"
          label="Home"
          icon={<Icon size={24} color="white" name="home" />}
        />
        <Tab
          barBackgroundColor="#37474F"
          label="Next"
          icon={<Icon size={24} color="white" name="chevron-right" />}
        />
      </BottomNavigation>


			</View>
		);
	}
}

const stylesHTML = StyleSheet.create({
	p:{
		padding: 20
	},
	ul:{
		flex: 1,
		flexWrap: 'nowrap',
		display: 'flex'
	},
  a: {
    fontWeight: '300',
    color: '#FF3366', // make links coloured pink
  },
});

const styles = StyleSheet.create({
	icon:{
		backgroundColor:"#03a9f4"
	},
	h1:{
		fontSize: 25,
		marginBottom: 20,
		textAlign: 'center'
	},
	backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
	container2: {
		marginTop:80,
		marginLeft:20,
		marginRight:20,
		marginBottom:60,
		minHeight: 550
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
import React, { Component } from 'react'
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
 



export default class MyTabbar extends Component {
  render() {
    return (
      <BottomNavigation
        labelColor="white"
        rippleColor="white"
        style={{ height: 56, elevation: 8, position: 'absolute', left: 0, bottom: 0, right: 0 }}
        onTabChange={(newTabIndex) => alert(`New Tab at position ${newTabIndex}`)}
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
    )
  }
}
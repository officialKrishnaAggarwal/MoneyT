import * as React from 'react'
import {DrawerItems} from 'react-navigation-drawer'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import firebase from 'firebase'
export default class CustomSideBarMenu extends React.Component{
  render(){
    return(
      <View>
   <View>
<DrawerItems
{...this.props}
/>
</View>
<View>
<TouchableOpacity
onPress={()=>{this.props.navigation.navigate('WelcomeScreen');
firebase.auth().signOut()}}>
<Text>LOG OUT</Text>
</TouchableOpacity>
</View>
      </View>
    )
  }
}
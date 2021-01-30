import * as React from 'react'
import {Text, StyleSheet} from 'react-native'

export default class Home extends React.Component{
  render(){
    return(
      <Text style = {styles.title}>Money Tracker</Text>
    )
  }
}

const styles = StyleSheet.create({
   title :{
     fontSize:65,
     fontWeight:'300',
     paddingBottom:30,
     color : '#ff3d00'
   }
})
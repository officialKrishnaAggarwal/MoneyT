import * as React from 'react'
import Home from '../Screens/Home'
import CustomSideBarMenu from './CustomSideBarMenu'
import {createDrawerNavigator} from 'react-navigation-drawer'

export const AppDrawerNavigator = createDrawerNavigator({
  Home:{
    screen:Home
  }

},
{
  contentComponent:CustomSideBarMenu
},
{
  initialRouteName:Home
}
)
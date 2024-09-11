import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Splash from '../pages/Splash'
import SignUp from '../pages/SignUp'
import Start from '../pages/Start'
import SignIn from '../pages/SignIn'

const Stack = createStackNavigator()
const AppNavigation = () => {


  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={Splash} options={{headerShown : false}}/>
            <Stack.Screen name="SignUp" component={SignUp} options={{headerShown : false}}/>
            <Stack.Screen name="SignIn" component={SignIn} options={{headerShown : false}}/>
            <Stack.Screen name="Start" component={Start} options={{headerShown : false}}/>


        </Stack.Navigator>

    </NavigationContainer>
  )
}

export default AppNavigation
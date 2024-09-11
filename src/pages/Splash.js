import { View, Text, SafeAreaView, ImageBackground } from 'react-native'
import React, { useEffect } from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {
    const navigation=useNavigation()
    const navigationHandler = ()=>{
        setTimeout(()=>{
            navigation.navigate("Start")
        },2000)
    }
    useEffect(()=>{
        navigationHandler()
    },[])
  return (
    <SafeAreaView style={{flex:1, backgroundColor: Colors.lighter}}>
        <ImageBackground source={require('../assets/images/splash.png')} style={{flex:1}} alt='splash' />
    </SafeAreaView>
  )
}

export default Splash
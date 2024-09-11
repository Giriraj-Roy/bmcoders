import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PoppinsExtraBold } from '../components/fonts'
import Button from '../components/Button'

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#FFFFFF", alignItems:"center"}}>
        <StatusBar backgroundColor="transparent" translucent={true} barStyle="dark-content" />
        <Image source={require('../assets/images/logo.png')} alt="logo" style={styles.image} />
        <PoppinsExtraBold text={`Welcome `} style={{fontSize: 32, color: "black", marginVertical: 20}} />
        <Button title={"Log Out"} onPress={()=>{}} style={{marginVertical: "30%"}}/>       
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    image: {
        width: "60%",
        alignSelf:"center",
        marginTop: "10%"
      }
})
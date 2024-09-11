import { ImageBackground, Pressable, SafeAreaView, StyleSheet, View } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Poppins, { PoppinsBold} from '../components/fonts'
import Button from '../components/Button'

const Start = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor: Colors.lighter}}>
        <ImageBackground source={require('../assets/images/splash.png')} alt='start' style={{flex:1, alignItems: 'center', justifyContent: "flex-end"}}>
        <View style={{width: "100%", alignItems: "center", backgroundColor: "white"}}>
            <PoppinsBold text={"Sparkle & Shine Transform Your Drive with Every Wash!"} style={{width: "90%", fontSize: 24, textAlign: "center"}}/>
            <View height={"15%"} />
            <Button onPress={()=>navigation.navigate("SignUp")} title={"Let's Start"} />
              <View style={{flexDirection: "row", marginVertical: 2}}>
                <Poppins text={"Already have an account?"} style={{fontSize: 14, fontWeight: "700", color: "#808080"}} />
                <Pressable onPress={()=>navigation.navigate("SignIn")}>
                  <Poppins text={" Sign in"} style={{fontSize: 14, fontWeight: "700", color: "#000000B2"}} />
                </Pressable>
              </View>
        </View>
        </ImageBackground>

    </SafeAreaView>
  )
}

export default Start

const styles = StyleSheet.create({})
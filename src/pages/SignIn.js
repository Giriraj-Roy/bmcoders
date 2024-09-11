import { Image, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Poppins, { PoppinsBold, PoppinsExtraBold } from '../components/fonts'
import Input from '../components/Input'
import signUpData from '../assets/data/signUp.data'
import Button from '../components/Button'


const SignIn = ({navigation}) => {

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#FFFFFF", alignItems:"center"}}>
      <StatusBar backgroundColor="transparent" translucent={true} barStyle="dark-content" />
      <ScrollView>
        <View style={{width: "100%", marginLeft: 15}}>
          <Image source={require('../assets/images/logo.png')} alt="logo" style={styles.image} />
          <PoppinsExtraBold text={"Sign In"} style={{fontSize: 32, color: "black"}} />
          <Poppins text={"Hi ! Welcome back, you have been missed"} style={{width: "50%", fontSize: 16, color: "#0000006B", fontWeight: "500"}} />
          {
            signUpData?.map((ele)=>{
              return(
                ele.id!=1 &&
                <View key={ele?.id}>
                  <Input title={ele?.title} image={ele?.image} placeholder={ele?.placeholder} />
                </View>
              )
            })
          }
          <View style={{alignItems:"flex-end",width: "85%",alignSelf:'center', marginVertical: 10}}>
            <PoppinsBold text={"Forgot Password? "} style={{color: "black", textDecorationLine: 'underline'}} />
          </View>

          <Button title={"Sign In"} onPress={()=>{navigation.navigate("Home")}} />

        </View>

          <View style={{flexDirection: "row", alignItems: "center", alignSelf: "center", marginVertical: 20}}>
            <View style={{width:"30%", height: 2, backgroundColor: "#A3CFFF", marginHorizontal: 4}}/>
            <Poppins text={"or"} />
            <View style={{width:"30%", height: 2, backgroundColor: "#A3CFFF", marginHorizontal: 4}}/>
          </View>
          <View style={{marginTop: 5 ,alignItems:'center', flexDirection: "row", alignSelf: "center", width: "40%", justifyContent: "space-around"}}>
            <Image source={require("../assets/images/google.png")} />
            <Image source={require("../assets/images/apple.png")} />

          </View>


        <View style={{flexDirection: "row", marginTop: 25, alignSelf: "center"}}>
          <Poppins text={"Don't have an account?  "} style={{fontSize: 14, fontWeight: "700", color: "#808080"}} />
          <Pressable onPress={()=>navigation.navigate("SignUp")}>
            <Poppins text={"Sign up"} style={{fontSize: 14, fontWeight: "700", color: "#000000B2", textDecorationLine: 'underline'}} />
          </Pressable>
          
        </View>
        <Poppins
            text={"By login or sign up, you agree to our terms of use and privacy policy"}
            style={{fontSize: 14, color: "#808080", textAlign: "center", marginTop: 20}} 
        />
      </ScrollView>
      <Image source={require("../assets/images/mask.png")} style={{position: "absolute", bottom: 0, left:0, zIndex: -1, transform: [{ scaleX: -1 }]}} />
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({
  image: {
    width: "60%",
    alignSelf:"center",
    marginTop: "10%"
  }
})
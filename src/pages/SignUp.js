import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Poppins, { PoppinsExtraBold } from '../components/fonts'
import Input from '../components/Input'
import signUpData from '../assets/data/signUp.data'

const SignUp = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#FFFFFF", paddingLeft: 20}}>
      <StatusBar backgroundColor="transparent" translucent={true} barStyle="dark-content" />
      <ScrollView>
        <Image source={require('../assets/images/logo.png')} alt="logo" style={styles.image} />
        <PoppinsExtraBold text={"Sign Up"} style={{fontSize: 32, color: "black"}} />
        <Poppins text={"Fill in the below form and add life to your car!"} style={{width: "75%", fontSize: 16, color: "#0000006B", fontWeight: "500"}} />
        {
          signUpData?.map((ele)=>{
            return(
              <View key={ele?.id}>
                <Input title={ele?.title} image={ele?.image} placeholder={ele?.placeholder} />
              </View>
            )
          })
        }
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({
  image: {
    width: "60%",
    alignSelf:"center",
    marginTop: "10%"
  }
})
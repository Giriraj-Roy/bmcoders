import { Image, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useRef, useState } from 'react'
import Poppins, { PoppinsBold, PoppinsExtraBold } from '../components/fonts'
import Input from '../components/Input'
import signUpData from '../assets/data/signUp.data'
import Button from '../components/Button'
import POSTRegister from '../apis/Auth'
import { AppContext } from '../context/AppContext'
import FlashMessage from 'react-native-flash-message'
import showToast from '../components/Toast'


const SignUp = ({navigation}) => {
  const [user, setUser] = useState({})
  const { setCurrentUser } = useContext(AppContext)
  const flashMessageRef = useRef();


  const handleSignUp = async ()=>{
    try{
      console.log('====================================');
      console.log("User", user);
      console.log('====================================');
      if(user.name == undefined || user.phone==undefined || user.password==undefined){
        throw new Error("Enter All fields")
      }
      const result = await POSTRegister(user);

      console.log('====================================');
      console.log("POST REgister ", result);
      console.log('====================================');
      setCurrentUser(result.data)
      showToast("Successfully Signed Up", "#63c991", "#63c991", flashMessageRef, -20)

      setTimeout(()=>navigation.navigate("Home"),1500)

    }catch(e){
      console.log(e);
      showToast(e.message, "#e44f26", "#e44f26", flashMessageRef, -20)
    }
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#FFFFFF", paddingLeft: 30}}>
      <StatusBar backgroundColor="transparent" translucent={true} barStyle="dark-content" />
      <ScrollView>
        <FlashMessage ref={flashMessageRef} />
        <Image source={require('../assets/images/logo.png')} alt="logo" style={styles.image} />
        <PoppinsExtraBold text={"Sign Up"} style={{fontSize: 32, color: "black"}} />
        <Poppins text={"Fill in the below form and add life to your car!"} style={{width: "75%", fontSize: 16, color: "#0000006B", fontWeight: "500", marginBottom: 15}} />
        {
          signUpData?.map((ele)=>{
            return (
              <View key={ele?.id}>
                <Input
                  title={ele?.title}
                  image={ele?.image}
                  placeholder={ele?.placeholder}
                  user={user}
                  setUser={setUser}
                />
              </View>
            );
          })
        }
        <View style={{flexDirection: "row", marginVertical: 18}}>
          <View style={{width: 20, height: 20, borderWidth: 1, borderRadius: 4, marginHorizontal: 8}} />
          <PoppinsBold text={"Agree with "} style={{color: "black"}} />
          <PoppinsBold text={"Terms & Conditions"} style={{color: "gray", textDecorationLine: 'underline'}} />
        </View>

        <Button title={"Sign Up"} onPress={()=>handleSignUp()} />


        <View style={{flexDirection: "row", marginTop: 25, alignSelf: "center"}}>
          <Poppins text={"Already have an account?  "} style={{fontSize: 14, fontWeight: "700", color: "#808080"}} />
          <Pressable onPress={()=>navigation.navigate("SignIn")}>
            <Poppins text={"Sign in"} style={{fontSize: 14, fontWeight: "700", color: "#000000B2", textDecorationLine: 'underline'}} />
          </Pressable>
          
        </View>
        <Poppins
            text={"By login or sign up, you agree to our terms of use and privacy policy"}
            style={{fontSize: 14, color: "#808080", textAlign: "center", marginTop: 20}} 
        />
      </ScrollView>
      <Image source={require("../assets/images/mask.png")} style={{position: "absolute", bottom: 0, right:0, zIndex: -1}} />
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
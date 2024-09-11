import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { PoppinsExtraBold } from '../components/fonts'
import Button from '../components/Button'
import { AppContext } from '../context/AppContext'

const Home = ({navigation}) => {

  const {currentUser, setCurrentUser } = useContext(AppContext)
  
  const handleLogOut = ()=>{
    setCurrentUser({})
    navigation.navigate("Start")
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "#FFFFFF", alignItems:"center"}}>
        <StatusBar backgroundColor="transparent" translucent={true} barStyle="dark-content" />
        <Image source={require('../assets/images/logo.png')} alt="logo" style={styles.image} />
        <PoppinsExtraBold text={`Welcome ${currentUser?.name}`} style={{fontSize: 32, color: "black", marginVertical: 20}} />
        <Button title={"Log Out"} onPress={handleLogOut} style={{marginVertical: "30%"}}/>       
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
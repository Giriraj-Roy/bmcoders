import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Poppins from './fonts'

const Input = ({title, placeholder, image, user, setUser}) => {
    const [inputVal, setInputVal] = useState('')
  return (
    <View style={{marginVertical: 4}}>
      <Poppins text={title} style={{fontSize : 14, fontWeight: "500", color: "#000000"}} />
      <View style={styles.inputContainer}>
        <Image source={image} alt={title} style={styles.image} />
        <TextInput
            value={inputVal}
            onChangeText={(e)=>setInputVal(e)}
            onEndEditing={(e)=>{
              setUser({...user, [title.toLowerCase()] : e.nativeEvent.text })
            }}
            placeholder={placeholder}
            placeholderTextColor={"gray"}
            secureTextEntry={title.toLowerCase()==='password'}
            style={styles.input}
        />
        {
            title.toLowerCase()==='password' &&
            <Image source={require('../assets/images/eye.png')} alt='eye'/>
        }
      </View>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    inputContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        width: "90%",
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#808080",
        paddingHorizontal: 8,
        paddingVertical: 4,
    },
    input :{
        width: "82%",
        marginHorizontal: 5
    }
})
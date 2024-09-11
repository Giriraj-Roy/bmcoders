import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Poppins from './fonts';

const HaveAccount = (text,action, screen) => {

    const navigation = useNavigation();

  return (
    <View style={{flexDirection: 'row', marginTop: 8}}>
      <Poppins
        text={'Already have an account?'}
        style={{fontSize: 14, fontWeight: '700', color: '#808080'}}
      />
      <Pressable onPress={() => navigation.navigate('SignIn')}>
        <Poppins
          text={' Sign in'}
          style={{fontSize: 14, fontWeight: '700', color: '#000000B2'}}
        />
      </Pressable>
    </View>
  );
};

export default HaveAccount;

const styles = StyleSheet.create({});

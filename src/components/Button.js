import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Inter, InterExtraBold} from './fonts';

const Button = ({onPress, title, textStyle}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Inter text={title} style={[styles.text, textStyle]} />
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: '90%',
    backgroundColor: '#A3CFFF',
    borderRadius: 32,
    paddingVertical: 8,
    textAlign: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    color: '#092A4D',
  },
});

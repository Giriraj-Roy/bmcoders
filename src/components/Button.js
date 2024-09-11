import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Inter} from './fonts';

const Button = ({onPress, title, textStyle, style}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
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
    elevation: 5,
    shadowColor : "#115399",
    shadowOffset: {
      width: 5,
      height: -5,
    },
    shadowOpacity : 0.8,
    shadowRadius : 3,
  },
  text: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    color: '#092A4D',
  },
});

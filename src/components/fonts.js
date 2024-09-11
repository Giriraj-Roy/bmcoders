import { StyleSheet, Text } from "react-native";

const Poppins = (props) => {
    return (
        <Text style={[styles.poppins,props.style]}>{props.text}</Text>
    );
  };
  export const PoppinsBold = (props) => {
    return (
        <Text style={[styles.poppinsBold,props.style]}>{props.text}</Text>
    );
  };
 export const PoppinsExtraBold = (props) => {
    return (
        <Text style={[styles.poppinsExtraBold,props.style]}>{props.text}</Text>
    );
  };


  //Inter

  export const Inter = (props) => {
    return (
        <Text style={[styles.inter,props.style]}>{props.text}</Text>
    );
  };
  export const InterExtraBold = (props) => {
    return (
        <Text style={[styles.interExtraBold,props.style]}>{props.text}</Text>
    );
  };


  const styles = StyleSheet.create({
    poppins:{
        fontFamily: 'Poppins-Regular',
    },
    poppinsBold:{
      fontFamily: 'Poppins-Bold',
  },
    poppinsExtraBold:{
      fontFamily: 'Poppins-ExtraBold',
  },
  inter: {
    fontFamily: 'Inter-Regular',
  },
  interExtraBold: {
    fontFamily: 'Inter-ExtraBold'
  }
  })
export default Poppins
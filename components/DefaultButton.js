import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const DefaultButton = (props) => {
  const style = StyleSheet.create({
    container: {
      backgroundColor: "transparent",
    },
    buttonText: {
      margin: 10,
      fontSize: 20,
      color: "#000000",
      backgroundColor: "transparent",
      padding: 15,
      width: 200,
      textAlign: "center",
    },
  });

  return (
    <TouchableOpacity style={style.container} onPress={props.press}>
      <Text style={style.buttonText}>{props.value}</Text>
    </TouchableOpacity>
  );
};

export default DefaultButton;

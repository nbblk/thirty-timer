import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const DefaultButton = (props) => {
  return (
    <TouchableOpacity style={style.container} onPress={props.press}>
      <Text style={[props.style, style.buttonText]} testID={props.testID}>
        {props.value}
      </Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
  },
  buttonText: {
    margin: 10,
    fontSize: 20,
    padding: 15,
    width: 200,
    textAlign: "center",
  },
});

export default DefaultButton;

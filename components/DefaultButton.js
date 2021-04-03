import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";

const defaultButton = (props) => {
  return (
    <TouchableOpacity style={[styles.container]} onPress={props.press}>
      <Text
        style={[props.style, styles.font, styles.buttonText]}
        testID={props.testID}
      >
        {props.value}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ...globalStyles,
  container: {
    backgroundColor: "transparent",
  },
  buttonText: {
    margin: 20,
    fontSize: 20,
    padding: 10,
    width: 200,
    textAlign: "center",
  },
});

export default defaultButton;

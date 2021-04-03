import React, { useContext } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";

import lightContext from "../hooks/lightContext";

const defaultButton = (props) => {
  const lightOff = useContext(lightContext);
  const light = lightOff ? styles.switchOff : styles.switchOn;

  return (
    <TouchableOpacity style={[styles.container]} onPress={props.press}>
      <Text
        style={[props.style, styles.font, styles.buttonText, light]}
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

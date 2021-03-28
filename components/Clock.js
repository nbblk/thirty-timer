import React from "react";
import { Text, StyleSheet } from "react-native";

const Clock = (props) => (
  <Text style={[props.style, styles.text]} testID={props.testID}>
    {props.minute}:{props.second === 60 ? "00" : props.second}
  </Text>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 70,
  },
});

export default Clock;

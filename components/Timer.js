import React from "react";
import { Text, StyleSheet } from "react-native";

const Timer = (props) => (
  <Text style={styles.timerText} testID={props.testID}>
    {props.minute}:{props.second === 60 ? "00" : props.second}
  </Text>
);

const styles = StyleSheet.create({
  timerText: {
    fontSize: 70,
  },
});

export default Timer;

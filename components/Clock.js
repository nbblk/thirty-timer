import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Clock = (props) => (
  <View testID="clockView" style={styles.container}>
    <Text testID="min" style={[props.style, styles.text]}>
      {props.minute}
    </Text>
    <Text testID="sec" style={[props.style, styles.text]}>
      {props.second === 60 ? "00" : props.second}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  text: {
    fontSize: 100,
    lineHeight: 100,
  },
});

export default Clock;

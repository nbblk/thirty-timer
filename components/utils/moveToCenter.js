import React from "react";
import { View, StyleSheet } from "react-native";

function moveToCenter(component) {
  return <View style={styles.container}>{component}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 100,
  },
});

export default moveToCenter;

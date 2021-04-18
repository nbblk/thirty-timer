import React from "react";
import { Text, StyleSheet } from "react-native";

const logo = (props) => {
  return (
    <Text style={[props.style, styles.logo]} testID="logo">
      Thirty
    </Text>
  );
};

const styles = StyleSheet.create({
  logo: {
    fontSize: 55,
    marginTop: 250,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default logo;

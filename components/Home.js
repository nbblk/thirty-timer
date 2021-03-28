import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Link } from "react-router-native";

import lightContext from "../hooks/lightContext";
import { globalStyles } from "../styles/global";
import Logo from "./Logo";

const home = (props) => {
  const lightOff = useContext(lightContext);
  const light = lightOff ? styles.switchOff : styles.switchOn;
  return (
    <View style={[styles.container, light]}>
      <Logo style={light} />
      <Link to="/timer">
        <Text style={[styles.buttons, light]}>Start</Text>
      </Link>
      <Link to="/streaks">
        <Text style={[styles.buttons, light]}>Streaks</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  ...globalStyles,
  buttons: {
    fontSize: 20,
    margin: 15,
  },
});

export default home;

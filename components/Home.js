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
      <Logo style={[styles.font, styles.logo, light]} />
      <Link to="/timer">
        <Text style={[styles.buttons, styles.font, light]}>Start</Text>
      </Link>
      <Link to="/streaks">
        <Text style={[styles.buttons, styles.font, light]}>Streaks</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  ...globalStyles,
  logo: {
    fontSize: 50,
    marginBottom: 100,
  },
  buttons: {
    fontSize: 20,
    margin: 20,
  },
});

export default home;

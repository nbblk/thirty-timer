import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Link } from "react-router-native";

import lightContext from "../hooks/lightContext";
import Logo from "./Logo";

const home = (props) => {
  const lightOff = useContext(lightContext);

  return (
    <View
      style={[styles.container, lightOff ? styles.switchOff : styles.switchOn]}
    >
      <Logo style={[lightOff ? styles.switchOff : styles.switchOn]} />
      <Link to="/start">
        <Text
          style={[
            styles.buttons,
            lightOff ? styles.switchOff : styles.switchOn,
          ]}
        >
          Start
        </Text>
      </Link>
      <Link to="/streaks">
        <Text
          style={[
            styles.buttons,
            lightOff ? styles.switchOff : styles.switchOn,
          ]}
        >
          Streaks
        </Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    fontSize: 20,
    margin: 15,
  },
  switchOn: {
    backgroundColor: "#ffffff",
    color: "#000000",
  },
  switchOff: {
    backgroundColor: "#000000",
    color: "#ffffff",
  },
});

export default home;

import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Link } from "react-router-native";

import lightContext from "../contexts/lightContext";
import { globalStyles } from "../styles/global";
import Logo from "./Logo";
import moveToBottom from "./utils/moveToBottom";

const home = (props) => {
  const lightOff = useContext(lightContext);
  const light = lightOff ? styles.switchOff : styles.switchOn;
  const buttons = [
    { path: "/timer", value: "Start" },
    { path: "/streaks", value: "Streaks" },
  ];

  const elements = [];
  buttons.forEach((button, index) => {
    elements.push(
      <Link to={button.path} key={index}>
        <Text testID="homeBtn" style={[styles.buttons, styles.font, light]}>
          {button.value}
        </Text>
      </Link>
    );
  });

  return (
    <View testID="homeView" style={[styles.container, light]}>
      <Logo testID="logo" style={[styles.font, styles.logo, light]} />
      {moveToBottom(elements)}
    </View>
  );
};

const styles = StyleSheet.create({
  ...globalStyles,
  logo: {
    fontSize: 50,
    marginTop: 250,
  },
});

export default home;

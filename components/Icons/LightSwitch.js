import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import DarkMoon from "./moon-dark.svg";
import LightMoon from "./moon-light.svg";

const lightSwitch = (props) => {
  return (
    <TouchableOpacity onPress={props.toggle} style={styles.icon}>
      {props.lightOff ? (
        <LightMoon width={50} height={50} />
      ) : (
        <DarkMoon width={50} height={50} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    padding: 20,
  },
});
export default lightSwitch;

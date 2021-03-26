import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "./moonIcon.svg";

const LightSwitch = (props) => {
  return (
    <TouchableOpacity
      testID="lightSwitchTouchable"
      onPress={props.toggle}
      style={styles.icon}
    >
      <Icon
        testID="lightIcon"
        width={50}
        height={50}
        fill={props.lightOff ? "#ffffff" : "#000000"}
      />
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
export default LightSwitch;

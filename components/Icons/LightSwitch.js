import React, { useContext } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import lightContext from "../../contexts/lightContext";
import Icon from "./moonIcon.svg";

const LightSwitch = (props) => {
  const lightOff = useContext(lightContext);

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
        fill={lightOff ? "#ffffff" : "#000000"}
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

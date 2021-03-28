import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import lightContext from "../hooks/lightContext";
import { globalStyles } from "../styles/global";
import SquareIcon from "./Icons/square.svg";

const status = (props) => {
  const lightOff = useContext(lightContext);
  const icons = [];
  for (let i = 0; i < props.streaks; i++) {
    icons[i] = (
      <SquareIcon
        testID="squareIcon"
        style={styles.icons}
        key={i}
        width={20}
        height={20}
        fill={lightOff ? "#ffffff" : "#000000"}
      />
    );
  }

  return (
    <View style={styles.statusContainer} testID="statusView">
      <View style={styles.icons}>{icons}</View>
      <Text
        style={[
          styles.taskTitle,
          lightOff ? styles.switchOff : styles.switchOn,
        ]}
        testID="statusTitle"
      >
        {props.taskTitle}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ...globalStyles,
  statusContainer: {
    alignItems: "center",
    position: "absolute",
    top: -110,
  },
  icons: {
    flexDirection: "row",
  },
  taskTitle: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});
export default status;

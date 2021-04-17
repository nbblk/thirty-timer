import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import lightContext from "../contexts/lightContext";
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
        fill={lightOff ? "white" : "black"}
      />
    );
  }
  return (
    <View style={styles.statusContainer} testID="statusView">
      <View style={styles.icons}>{icons}</View>
      <Text
        style={[
          styles.font,
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
    position: "absolute",
    top: 50,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "center",
  },
  taskTitle: {
    fontSize: 12,
    textAlign: "center",
    margin: 10,
  },
});
export default status;

import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useHistory } from "react-router-native";

import lightContext from "../hooks/lightContext";
import { globalStyles } from "../styles/global";
import DiamondIcon from "../components/Icons/diamond.svg";
import DefaultButton from "./DefaultButton";

const report = (props) => {
  const lightOff = useContext(lightContext);
  const history = useHistory();
  const light = light;
  const icons = [];
  if (props.completedSession > 0) {
    for (let i = 0; i < props.completedSession; i++) {
      icons.push(<DiamondIcon fill={lightOff ? "white" : "none"} key={i} />);
    }
  }

  return (
    <View testID="totalView" style={[styles.totalContainer, light]}>
      <View testID="sessionCount" style={styles.icons}>
        {icons.length > 0 ? icons : null}
      </View>
      <Text style={[light, styles.mainText]}>You've done</Text>
      <Text testID="streakCount" style={[light, styles.mainText]}>
        30 x {props.completedTasks.length}
      </Text>
      <Text style={[light, styles.mainText]}>streaks in a total.</Text>
      <View testID="taskList" style={styles.taskContainer}>
        {props.completedTasks.map((task, index) => {
          return (
            <Text key={index} style={[light, styles.subText]}>
              {task.title} x {task.streaks}
            </Text>
          );
        })}
      </View>
      <DefaultButton
        testID="addBtn"
        style={[light]}
        value="Add a task"
        press={() => history.replace("/streaks")}
      />
      <DefaultButton
        testID="goHomeBtn"
        style={[light]}
        value="End session"
        press={() => history.replace("/")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ...globalStyles,
  totalContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  icons: {
    flexDirection: "row",
    position: "absolute",
    top: 100,
  },
  taskContainer: {
    margin: 30,
  },
  mainText: {
    fontSize: 30,
    textAlign: "center",
  },
  subText: {
    fontSize: 15,
    textAlign: "center",
  },
});
export default report;

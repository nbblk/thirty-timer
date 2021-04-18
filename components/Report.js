import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useHistory } from "react-router-native";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

import lightContext from "../contexts/lightContext";
import { globalStyles } from "../styles/global";
import DiamondIcon from "../components/Icons/diamond.svg";
import DefaultButton from "./DefaultButton";
import moveToBottom from "./utils/moveToBottom";
import moveToCenter from "./utils/moveToCenter";

const report = (props) => {
  const lightOff = useContext(lightContext);
  const history = useHistory();
  const session = props.session;
  const light = lightOff ? styles.switchOff : styles.switchOn;

  const icons = [];

  if (session.completedSession > 0) {
    for (let i = 0; i < session.completedSession; i++) {
      icons.push(<DiamondIcon fill={lightOff ? "white" : "none"} key={i} />);
    }
  }

  let streaks = 0;
  if (session.completedTasks.length == 1) {
    streaks = session.completedTasks[0].streaks;
  } else {
    const reducer = (prev, cur) => prev + parseInt(cur.streaks);
    streaks = session.completedTasks.reduce(reducer, 0);
  }

  return (
    <View testID="reportView" style={[styles.container, light]}>
      <View testID="sessionCount" style={styles.icons}>
        {icons.length > 0 ? icons : null}
      </View>
      {moveToCenter(
        <Text key={uuidv4()} style={[light, styles.font, styles.mainText]}>
          You've done{"\n"}
          {streaks} streaks in total.
        </Text>
      )}
      <View testID="taskList" style={styles.taskContainer}>
        {session.completedTasks.map((task, index) => {
          return (
            <Text key={index} style={[light, styles.font, styles.subText]}>
              {task.title} x {task.streaks}
            </Text>
          );
        })}
      </View>
      {moveToBottom([
        <DefaultButton
          key={uuidv4()}
          testID="addBtn"
          style={[styles.font, light]}
          value="Add a task"
          press={() => history.replace("/streaks")}
        />,
        <DefaultButton
          key={uuidv4()}
          testID="goHomeBtn"
          style={[styles.font, light]}
          value="End session"
          press={() => {
            props.reset();
            history.replace("/");
          }}
        />,
      ])}
    </View>
  );
};

const styles = StyleSheet.create({
  ...globalStyles,
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

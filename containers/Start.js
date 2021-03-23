import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useHistory } from "react-router-native";

import DefaultButton from "../components/DefaultButton";
import Timer from "../components/Timer";

const Start = (props) => {
  const history = useHistory();
  const [timer, setTimer] = useState({
    minute: 30,
    second: 60,
    stopped: true,
    finished: false,
  });

  useEffect(() => {
    let intervalId = null;
    const countdown = () => {
      setTimer((prev) => {
        if (prev.minute <= 0 && prev.second <= 0) {
          clearInterval(intervalId);
          return {
            minute: 30,
            second: 60,
            stopped: true,
            finished: true,
          };
        }
        if (prev.minute > 0 && prev.second === 0) {
          return {
            ...prev,
            minute: prev.minute <= 0 ? 0 : prev.minute - 1,
            second: 60,
          };
        } else {
          return {
            ...prev,
            minute: prev.minute === 30 ? 29 : prev.minute,
            second: prev.second <= 0 ? 0 : prev.second - 1,
          };
        }
      });
    };
    if (!timer.stopped) {
      intervalId = setInterval(countdown, 1000);
    }
    return () => clearInterval(intervalId);
  }, [timer]);

  const timerHandler = () => setTimer({ ...timer, stopped: !timer.stopped });

  return (
    <View style={styles.container} testID="startView">
      {timer.finished ? (
        <Text style={styles.timerText} testID="finishedText">
          You did it! Let's take a break
        </Text>
      ) : (
        <Timer
          testID="timer"
          minute={timer.minute}
          second={timer.second < 10 ? "0" + timer.second : timer.second}
        />
      )}
      <DefaultButton
        testID="handleTimerBtn"
        value={timer.stopped ? "Start" : "Pause"}
        press={() => timerHandler()}
      />
      <DefaultButton
        testID="giveupBtn"
        value="Give up"
        press={() => history.go(-1)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Start;

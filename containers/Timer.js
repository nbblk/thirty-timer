import React, { useEffect, useState, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useHistory } from "react-router-native";

import lightContext from "../hooks/lightContext";
import { globalStyles } from "../styles/global";
import DefaultButton from "../components/DefaultButton";
import Status from "../components/Status";
import Clock from "../components/Clock";

const Timer = (props) => {
  const lightOff = useContext(lightContext);
  const history = useHistory();
  const [timer, setTimer] = useState({
    minute: 30,
    second: 60,
    stopped: true,
    finished: false,
    title: props.location.state ? props.location.state.title : "",
    streaks: props.location.state ? props.location.state.streaks : 0,
    completedSession: props.location.state
      ? props.location.state.completedSession
      : 0,
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
            streaks: timer.streaks != 0 ? timer.streaks - 1 : 0,
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

  const light = lightOff ? styles.switchOff : styles.switchOn;
  return (
    <View testID="timerView" style={[styles.container, light]}>
      {timer.finished ? (
        <Text style={light} testID="finishedText">
          You did it! Let's take a break
        </Text>
      ) : (
        <View>
          {timer.streaks > 0 ? (
            <Status streaks={timer.streaks} taskTitle={timer.title} />
          ) : null}
          <Clock
            testID="timer"
            style={light}
            minute={timer.minute}
            second={timer.second < 10 ? "0" + timer.second : timer.second}
          />
        </View>
      )}
      <DefaultButton
        testID="handleTimerBtn"
        style={light}
        value={timer.stopped ? "Start" : "Pause"}
        press={() => timerHandler()}
      />
      <DefaultButton
        testID="giveupBtn"
        style={light}
        value="Give up"
        press={() => history.go(-1)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ...globalStyles,
});

export default Timer;

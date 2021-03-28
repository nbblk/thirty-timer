import React, { useEffect, useState, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useHistory } from "react-router-native";

import lightContext from "../hooks/lightContext";
import { globalStyles } from "../styles/global";
import DefaultButton from "../components/DefaultButton";
import Clock from "../components/Clock";

const Timer = (props) => {
  const lightOff = useContext(lightContext);

  const history = useHistory();
  const [timer, setTimer] = useState({
    minute: 30,
    second: 60,
    stopped: true,
    finished: false,
    title: "",
    streaks: 0,
    completedSession: 0,
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
    // state from the new task
    // if (props.location.state) {
    //   const task = props.location.state;
    //   setTimer({
    //     ...timer,
    //     title: task.title,
    //     streaks: task.streaks,
    //     completedSession: task.completedSession,
    //   });
    // }
    if (!timer.stopped) {
      intervalId = setInterval(countdown, 1000);
    }
    return () => clearInterval(intervalId);
  }, [timer]);

  const timerHandler = () => setTimer({ ...timer, stopped: !timer.stopped });

  const light = lightOff ? styles.switchOff : styles.switchOn;
  console.log(light);
  return (
    <View style={[styles.container, light]} testID="timerView">
      {timer.finished ? (
        <Text style={light} testID="finishedText">
          You did it! Let's take a break
        </Text>
      ) : (
        <Clock
          style={light}
          testID="timer"
          minute={timer.minute}
          second={timer.second < 10 ? "0" + timer.second : timer.second}
        />
      )}
      <DefaultButton
        style={light}
        testID="handleTimerBtn"
        value={timer.stopped ? "Start" : "Pause"}
        press={() => timerHandler()}
      />
      <DefaultButton
        style={light}
        testID="giveupBtn"
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

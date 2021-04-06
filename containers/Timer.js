import React, { useEffect, useState, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useHistory } from "react-router-native";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

import lightContext from "../hooks/lightContext";
import sessionContext from "../hooks/sessionContext";
import { globalStyles } from "../styles/global";
import DefaultButton from "../components/DefaultButton";
import Status from "../components/Status";
import Clock from "../components/Clock";
import moveToCenter from "../components/utils/moveToCenter";
import moveToBottom from "../components/utils/moveToBottom";

const Timer = (props) => {
  const lightOff = useContext(lightContext);
  const { updateCompletedSessionData } = useContext(sessionContext);
  const history = useHistory();

  const task = props.location.state ? props.location.state : {};
  const [timer, setTimer] = useState({
    minute: 30,
    second: 60,
    stopped: true,
    finished: false,
    title: task.title ? task.title : "",
    streaks: task.streaks ? task.streaks : 0,
  });
  const light = lightOff ? styles.switchOff : styles.switchOn;

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

  const allStreaksFinished = () => {
    updateCompletedSessionData({ title: timer.title, streaks: timer.streaks });
    return (
      <View>
        <Text testID="allStreaksFinishedText" style={[styles.font, light]}>
          Well done! Do you want to continue with a new task?
        </Text>
        {moveToBottom([
          <DefaultButton
            key={uuidv4()}
            style={[light]}
            value="Hell yes!"
            press={() => history.replace("/streaks")}
          />,
          <DefaultButton
            key={uuidv4()}
            style={[light]}
            value="Nah I'm tired"
            press={() => history.go("/report")}
          />,
        ])}
      </View>
    );
  };

  const notFinishedYet = () => {
    let elements = null;
    if (timer.finished) {
      setTimer({ ...timer, streaks: timer.streaks - 1 });
      elements = (
        <View style={[styles.container, light]}>
          <Text style={[styles.font, light]} testID="finishedText">
            You did it! Let's take a break
          </Text>{" "}
          {moveToBottom([
            <DefaultButton
              key={uuidv4()}
              testID="continueBtn"
              style={[light]}
              value={timer.stopped ? "Start" : "Pause"}
              press={() => timerHandler()}
            />,
            <DefaultButton
              key={uuidv4()}
              testID="giveupBtn"
              style={[light]}
              value="Give up"
              press={() => history.replace("/")}
            />,
          ])}
        </View>
      );
    } else {
      elements = (
        <View style={[styles.container, light]}>
          {timer.streaks > 0 ? (
            <Status streaks={timer.streaks} taskTitle={timer.title} />
          ) : null}
          {moveToCenter(
            <Clock
              testID="timer"
              style={[styles.font, styles.clock, light]}
              minute={timer.minute}
              second={timer.second < 10 ? "0" + timer.second : timer.second}
            />
          )}
          {moveToBottom([
            <DefaultButton
              key={uuidv4()}
              testID="handleTimerBtn"
              style={[light]}
              value={timer.stopped ? "Start" : "Pause"}
              press={() => timerHandler()}
            />,
            <DefaultButton
              key={uuidv4()}
              testID="giveupBtn"
              style={[light]}
              value="Give up"
              press={() => history.replace("/")}
            />,
          ])}
        </View>
      );
    }
    return elements;
  };

  return (
    <View testID="timerView" style={[styles.container, light]}>
      {timer.streaks === 0 && timer.finished
        ? allStreaksFinished()
        : notFinishedYet()}
    </View>
  );
};

const styles = StyleSheet.create({
  ...globalStyles,
});

export default Timer;

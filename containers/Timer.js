import React, { useEffect, useState, useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useHistory, useLocation } from "react-router-native";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

import lightContext from "../contexts/lightContext";
import { globalStyles } from "../styles/global";
import DefaultButton from "../components/DefaultButton";
import Status from "../components/Status";
import Clock from "../components/Clock";
import moveToCenter from "../components/utils/moveToCenter";
import moveToBottom from "../components/utils/moveToBottom";

const Timer = (props) => {
  const lightOff = useContext(lightContext);
  const history = useHistory();
  const location = useLocation();

  const task = location ? location.state : null;
  const [timer, setTimer] = useState({
    minute: 0, // 30
    second: 5, // 60
    stopped: true,
    finished: false,
    title: task ? task.title : "",
    streaks: task ? task.streaks : 0,
    streaksLeft: task ? task.streaks : 0,
  });

  const light = lightOff ? styles.switchOff : styles.switchOn;

  useEffect(() => {
    let intervalId = null;
    const countdown = () => {
      setTimer((prev) => {
        if (prev.minute <= 0 && prev.second <= 0) {
          clearInterval(intervalId);

          return {
            ...prev,
            minute: 0, // 30
            second: 5, // 60
            stopped: true,
            finished: true,
            streaksLeft: timer.streaksLeft > 0 ? timer.streaksLeft - 1 : 0,
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
            second: prev.second <= 0 ? 59 : prev.second - 1,
          };
        }
      });
    };
    if (timer.title && !timer.streaksLeft && timer.finished) {
      console.log("to be updated...");
      props.update({ title: timer.title, streaks: timer.streaks });
    }
    if (!timer.stopped) {
      intervalId = setInterval(countdown, 1000);
    }
    return () => clearInterval(intervalId);
  }, [timer]);

  const restartHandler = () => {
    setTimer({ ...timer, stopped: !timer.stopped, finished: false });
  };

  const allStreaksFinished = () => {
    console.log("all streaks finished");
    return (
      <View style={[styles.container]}>
        {moveToCenter(
          <Text
            testID="allStreaksFinishedText"
            style={[styles.font, light, styles.mainText]}
          >
            Well done! {"\n"} Do you want to continue with a new task?
          </Text>
        )}
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
            press={() =>
              props.session.streakMode
                ? history.replace("/report")
                : history.replace("/")
            }
          />,
        ])}
      </View>
    );
  };

  const notFinishedYet = () => {
    return (
      <View style={[styles.container, light]}>
        {timer.streaks ? (
          <Status streaks={timer.streaksLeft} taskTitle={timer.title} />
        ) : null}
        {timer.finished
          ? moveToCenter([
              <Text
                key={uuidv4()}
                style={[styles.font, light, styles.mainText]}
                testID="finishedText"
              >
                You did it!{"\n"} Let's take a break
              </Text>,
            ])
          : moveToCenter([
              <Clock
                key={uuidv4()}
                testID="timer"
                style={[styles.font, styles.clock, light]}
                minute={timer.minute < 10 ? "0" + timer.minute : timer.minute}
                second={timer.second < 10 ? "0" + timer.second : timer.second}
              />,
            ])}
        {moveToBottom([
          <DefaultButton
            key={uuidv4()}
            testID="continueBtn"
            style={[light]}
            value={timer.stopped ? "Start" : "Pause"}
            press={() => restartHandler()}
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
  };

  return (
    <View testID="timerView" style={[styles.container, light]}>
      {timer.streaksLeft === 0 && timer.finished
        ? allStreaksFinished()
        : notFinishedYet()}
    </View>
  );
};

const styles = StyleSheet.create({
  ...globalStyles,
});

export default Timer;

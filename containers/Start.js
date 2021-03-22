import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import DefaultButton from "../components/DefaultButton";

import { useHistory } from "react-router-native";

const Timer = (props) => (
  <Text style={styles.timerText}>
    {props.minute}:{props.second === 60 ? "00" : props.second}
  </Text>
);

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
    <View style={styles.container}>
      {timer.finished ? (
        <Text style={styles.timerText}>You did it! Let's take a break</Text>
      ) : (
        <Timer
          minute={timer.minute}
          second={timer.second < 10 ? "0" + timer.second : timer.second}
        />
      )}
      <DefaultButton
        value={timer.stopped ? "Start" : "Pause"}
        press={() => timerHandler()}
      ></DefaultButton>
      <DefaultButton
        value="Give up"
        press={() => history.go(-1)}
      ></DefaultButton>
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
  timerText: {
    fontSize: 70,
  },
});

export default Start;

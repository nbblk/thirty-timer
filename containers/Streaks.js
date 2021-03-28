import React, { useEffect, useState, useContext } from "react";
import { SafeAreaView, Text, TextInput, StyleSheet } from "react-native";
import { useHistory } from "react-router-native";
import HideWithKeyboard from "react-native-hide-with-keyboard";

import lightContext from "../hooks/lightContext";
import { globalStyles } from "../styles/global";
import DefaultButton from "../components/DefaultButton";

const Streaks = (props) => {
  const lightOff = useContext(lightContext);
  const history = useHistory();
  const [task, setTask] = useState({
    title: "",
    streaks: 0,
    completedSession: 0,
  });

  const addTaskHandler = () => {
    history.replace("/timer", {
      title: task.title,
      streaks: task.streaks,
      completedSession: task.completedSession,
    });
  };

  const styles = StyleSheet.create({
    ...globalStyles,
    text: {
      fontSize: 20,
    },
    inputText: {
      height: 40,
      width: 200,
      margin: 20,
      borderWidth: 1,
      borderColor: "transparent",
      borderBottomColor: lightOff ? "white" : "black",
    },
    inputNumber: {
      height: 40,
      width: 100,
      margin: 20,
      borderWidth: 1,
      borderColor: "transparent",
      borderBottomColor: lightOff ? "white" : "black",
    },
  });

  const light = lightOff ? styles.switchOff : styles.switchOn;

  return (
    <SafeAreaView style={[styles.container, light]}>
      <Text style={[styles.text, light]}>What to do</Text>
      <TextInput
        style={styles.inputText}
        value={task.title}
        onChangeText={(value) => setTask({ ...task, title: value })}
        textAlign="center"
        textAlignVertical="center"
        autoFocus
      />
      <Text style={[styles.text, light]}>Streaks</Text>
      <TextInput
        style={styles.inputNumber}
        keyboardType="numeric"
        value={task.streaks.toString()}
        onChangeText={(value) => setTask({ ...task, streaks: value })}
        placeholder="1-10"
        defaultValue="1"
        textAlign="center"
        textAlignVertical="center"
      />
      <HideWithKeyboard>
        <DefaultButton value="Add" press={addTaskHandler} />
        <DefaultButton value="Go back" press={() => history.go(-1)} />
      </HideWithKeyboard>
    </SafeAreaView>
  );
};

export default Streaks;

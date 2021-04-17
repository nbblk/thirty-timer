import React, { useState, useContext } from "react";
import { SafeAreaView, Text, TextInput, StyleSheet } from "react-native";
import { useHistory } from "react-router-native";
import HideWithKeyboard from "react-native-hide-with-keyboard";

import lightContext from "../contexts/lightContext";
import { globalStyles } from "../styles/global";
import DismissKeyboard from "../components/utils/dismissKeyboard";
import DefaultButton from "../components/DefaultButton";

const Streaks = (props) => {
  const lightOff = useContext(lightContext);
  const history = useHistory();
  const [task, setTask] = useState({
    title: "",
    streaks: 0,
  });

  const addTaskHandler = () => {
    history.replace("/timer", {
      title: task.title,
      streaks: task.streaks,
    });
  };

  const styles = StyleSheet.create({
    ...globalStyles,
    text: {
      fontSize: 15,
      marginTop: 50,
      marginBottom: 10,
    },
    inputText: {
      height: 40,
      width: 200,
      fontFamily: "PressStart2P",
      color: lightOff ? "white" : "black",
      borderWidth: 1,
      borderColor: "transparent",
      borderBottomColor: lightOff ? "white" : "black",
      borderBottomWidth: 2,
    },
    inputNumber: {
      height: 40,
      width: 100,
      marginBottom: 100,
      fontFamily: "PressStart2P",
      color: lightOff ? "white" : "black",
      borderWidth: 1,
      borderColor: "transparent",
      borderBottomColor: lightOff ? "white" : "black",
      borderBottomWidth: 2,
    },
  });

  const light = lightOff ? styles.switchOff : styles.switchOn;

  return (
    <DismissKeyboard>
      <SafeAreaView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={[styles.container, light]}
      >
        <Text style={[styles.font, styles.text, light]}>What to do</Text>
        <TextInput
          style={styles.inputText}
          value={task.title}
          onChangeText={(value) => setTask({ ...task, title: value })}
          textAlign="center"
          textAlignVertical="center"
          autoFocus
        />
        <Text style={[styles.font, styles.text, light]}>Streaks</Text>
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
          <DefaultButton value="Add" style={light} press={addTaskHandler} />
          <DefaultButton
            value="Go back"
            style={light}
            press={() => history.go(-1)}
          />
        </HideWithKeyboard>
      </SafeAreaView>
    </DismissKeyboard>
  );
};

export default Streaks;

import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, TextInput, StyleSheet } from "react-native";
import { useHistory } from "react-router";

import DefaultButton from "../components/DefaultButton";

const Streaks = (props) => {
  const history = useHistory();
  const [task, setTask] = useState({
    title: "",
    added: false,
    streaks: 0,
    completedSession: 0,
  });

  useEffect(() => {
    if (task.added) {
      history.push("/start", {
        title: task.title,
        streaks: task.streaks,
        completedSession: task.completedSession,
      });
    }
  }, [task]);

  const addTaskHandler = () => {
    setTask({ ...task, added: true });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>What to do</Text>
      <TextInput
        style={styles.inputText}
        value={task.title}
        onChangeText={(value) => setTask({ ...task, title: value })}
        textAlign="center"
        textAlignVertical="center"
        autoFocus
      />
      <Text style={styles.text}>Streaks</Text>
      <TextInput
        style={styles.inputNumber}
        keyboardType="numeric"
        value={task.streaks}
        onChangeText={(value) =>
          setTask({ ...task, streaks: value.replace(/[^A-Za-z]/g, "") })
        }
        placeholder="1-10"
        defaultValue="1"
        textAlign="center"
        textAlignVertical="center"
      />
      <DefaultButton value="Add" press={addTaskHandler} />
      <DefaultButton value="Go back" press={() => history.go(-1)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
  inputText: {
    height: 40,
    width: 200,
    margin: 20,
    borderWidth: 1,
    borderColor: "#ffffff",
    borderBottomColor: "black",
  },
  inputNumber: {
    height: 40,
    width: 100,
    margin: 20,
    borderWidth: 1,
    borderColor: "#ffffff",
    borderBottomColor: "black",
  },
});

export default Streaks;

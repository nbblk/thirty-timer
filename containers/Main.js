import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Logo from "../components/Logo";
import DefaultButton from "../components/DefaultButton";

const Main = (props) => {
  const [pressed, setPressed] = useState("");

  const onStart = () => {
    console.log("START");
    setPressed("start");
  };

  const onStreak = () => {
    console.log("STREAK");
    setPressed("streak");
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  return (
    <View style={[props.shared, styles.container]}>
      <Logo />
      <DefaultButton
        value="Start"
        testID="startButton"
        press={onStart}
        shared={styles.shared}
      />
      <DefaultButton
        value="Streaks"
        testID="streakButton"
        press={onStreak}
        shared={styles.shared}
      />
    </View>
  );
};

export default Main;

import React from "react";
import { StyleSheet, View } from "react-native";
import Main from "./containers/Main";

export default function App() {
  return <Main style={styles.shared} />;
}

const styles = StyleSheet.create({
  shared: {
    fontFamily: "Helvetica",
  },
});

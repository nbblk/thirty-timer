import React from "react";
import { View, Text, StyleSheet, AppRegistry } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import Logo from "./components/Logo";

import Start from "./containers/Start";
import Streaks from "./containers/Streaks";

export default function App() {
  return (
    <NativeRouter>
      <Route exact path="/">
        <View style={styles.container}>
          <Logo />
          <Link to="/start">
            <Text style={styles.buttons}>Start</Text>
          </Link>
          <Link to="/streaks">
            <Text style={styles.buttons}>Streaks</Text>
          </Link>
        </View>
      </Route>
      <Route path="/start" component={Start} />
      <Route path="/streaks" component={Streaks} />
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    fontSize: 30,
    margin: 15,
  },
});

AppRegistry.registerComponent("MyApp", () => App);

import React, { useState } from "react";
import { View, Text, StyleSheet, AppRegistry } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import Logo from "./components/Logo";

import Start from "./containers/Start";
import Streaks from "./containers/Streaks";
import LightSwitch from "./components/Icons/LightSwitch";

export default function App() {
  const [lightOff, setLightOff] = useState(false);

  return (
    <NativeRouter>
      <Route exact path="/">
        <View
          style={[
            styles.container,
            lightOff ? styles.switchOff : styles.switchOn,
          ]}
        >
          <Logo style={[lightOff ? styles.switchOff : styles.switchOn]} />
          <Link to="/start">
            <Text
              style={[
                styles.buttons,
                lightOff ? styles.switchOff : styles.switchOn,
              ]}
            >
              Start
            </Text>
          </Link>
          <Link to="/streaks">
            <Text
              style={[
                styles.buttons,
                lightOff ? styles.switchOff : styles.switchOn,
              ]}
            >
              Streaks
            </Text>
          </Link>
        </View>
      </Route>
      <Route path="/start" component={Start} />
      <Route path="/streaks" component={Streaks} />
      <LightSwitch toggle={() => setLightOff(!lightOff)} lightOff={lightOff} />
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
    fontSize: 20,
    margin: 15,
  },
  switchOn: {
    backgroundColor: "#ffffff",
    color: "#000000",
  },
  switchOff: {
    backgroundColor: "#000000",
    color: "#ffffff",
  },
});

AppRegistry.registerComponent("MyApp", () => App);

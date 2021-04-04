import React, { useEffect, useState } from "react";
import { AppRegistry, Text, StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { NativeRouter, Route } from "react-router-native";

import lightContext, { updateLight } from "./hooks/lightContext";
import sessionContext, { updateSession } from "./hooks/sessionContext";
import Home from "./components/Home";
import Timer from "./containers/Timer";
import Streaks from "./containers/Streaks";
import Report from "./components/Report";
import LightSwitch from "./components/Icons/LightSwitch";
import * as Font from "expo-font";

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const { lightOff, pressHandler } = updateLight();
  const { session } = updateSession();

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        PressStart2P: require("./assets/fonts/PressStart2P-Regular.ttf"),
      });
      setFontLoaded(true);
    };
    loadFonts();
  }, []);

  if (!fontLoaded) {
    return <AppLoading onError={console.warn} />;
  } else {
    return (
      <NativeRouter>
        <lightContext.Provider value={lightOff}>
          <sessionContext.Provider value={session}>
            <Route exact path="/" component={Home} />
            <Route path="/timer" component={Timer} />
            <Route path="/streaks" component={Streaks} />
            <Route
              path="/report"
              render={() => (
                <Report
                  completedSession={session.completedSession}
                  completedTasks={session.completedTasks}
                />
              )}
            />
            <LightSwitch toggle={pressHandler} />
          </sessionContext.Provider>
        </lightContext.Provider>
      </NativeRouter>
    );
  }
}

AppRegistry.registerComponent("MyApp", () => App);

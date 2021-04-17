import React, { useEffect, useState } from "react";
import { AppRegistry } from "react-native";
import { NativeRouter, Switch, Route } from "react-router-native";
import AppLoading from "expo-app-loading";

import lightContext, { updateLight } from "./contexts/lightContext";
import Home from "./components/Home";
import Timer from "./containers/Timer";
import Streaks from "./containers/Streaks";
import Report from "./components/Report";
import LightSwitch from "./components/Icons/LightSwitch";
import * as Font from "expo-font";

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const { lightOff, pressHandler } = updateLight();

  const [session, setSession] = useState({
    streakMode: false,
    completedSession: 0,
    completedTasks: [],
  });

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        PressStart2P: require("./assets/fonts/PressStart2P-Regular.ttf"),
      });
      setFontLoaded(true);
    };
    loadFonts();
  }, []);

  const updateSession = (task) => {
    console.log(task);
    if (task) {
      setSession({
        streakMode: true,
        completedSession: session.completedSession + 1,
        completedTasks: [...session.completedTasks, task],
      });
    } else {
      setSession({
        ...session,
        streakMode: false,
      });
    }
  };

  const resetSession = () =>
    setSession({ streakMode: false, completedSession: 0, completedTasks: [] });

  if (!fontLoaded) {
    return <AppLoading onError={console.warn} />;
  } else {
    console.log(session);
    return (
      <NativeRouter>
        <lightContext.Provider value={lightOff}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/timer"
              render={() => (
                <Timer
                  session={session}
                  update={(task) => updateSession(task)}
                />
              )}
            />
            <Route path="/streaks" component={Streaks} />
            <Route
              path="/report"
              render={() => (
                <Report session={session} reset={() => resetSession()} />
              )}
            />
          </Switch>
          <LightSwitch toggle={pressHandler} />
        </lightContext.Provider>
      </NativeRouter>
    );
  }
}

AppRegistry.registerComponent("MyApp", () => App);

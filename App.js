import React from "react";
import { AppRegistry } from "react-native";
import { NativeRouter, Route } from "react-router-native";

import lightContext, { updateLight } from "./hooks/lightContext";
import sessionContext, { updateSession } from "./hooks/sessionContext";
import Home from "./components/Home";
import Timer from "./containers/Timer";
import Streaks from "./containers/Streaks";
import Report from "./components/Report";
import LightSwitch from "./components/Icons/LightSwitch";

export default function App() {
  const { lightOff, pressHandler } = updateLight();
  const { session } = updateSession();
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

AppRegistry.registerComponent("MyApp", () => App);

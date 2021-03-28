import React from "react";
import { AppRegistry } from "react-native";
import { NativeRouter, Route } from "react-router-native";

import lightContext, { updateLight } from "./hooks/lightContext";
import Home from "./components/Home";
import Timer from "./containers/Timer";
import Streaks from "./containers/Streaks";
import LightSwitch from "./components/Icons/LightSwitch";

export default function App() {
  const { lightOff, pressHandler } = updateLight();
  return (
    <NativeRouter>
      <lightContext.Provider value={lightOff}>
        <Route exact path="/" component={Home} />
        <Route path="/timer" component={Timer} />
        <Route path="/streaks" component={Streaks} />
        <LightSwitch toggle={pressHandler} />
      </lightContext.Provider>
    </NativeRouter>
  );
}

AppRegistry.registerComponent("MyApp", () => App);

import React from "react";
import { View, Text } from "react-native";
import DefaultButton from "../components/DefaultButton";

import { useHistory } from "react-router-native";

const Streaks = () => {
  let history = useHistory();
  return (
    <View>
      <Text>I am loaded Streak</Text>
      <DefaultButton value="Back" press={() => history.go(-1)}></DefaultButton>
    </View>
  );
};

export default Streaks;

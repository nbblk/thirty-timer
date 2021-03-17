import React from "react";
import { Button, Dimensions, StyleSheet } from "react-native";

const DefaultButton = (props) => {
  return (
    <Button onPress={props.press} testID={props.testId} title={props.value} />
  );
};

export default DefaultButton;

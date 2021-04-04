import React from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

const dismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default dismissKeyboard;

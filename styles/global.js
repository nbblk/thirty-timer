import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    fontSize: 18,
    margin: 20,
    width: 200,
    textAlign: "center",
  },
  switchOn: {
    backgroundColor: "#ffffff",
    color: "#000000",
  },
  switchOff: {
    backgroundColor: "#000000",
    color: "#ffffff",
  },
  font: {
    fontFamily: "PressStart2P",
  },
});

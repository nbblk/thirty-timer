import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  mainText: {
    fontSize: 20,
    flexWrap: "wrap",
    textAlign: "center",
    lineHeight: 40,
  },
  buttons: {
    fontSize: 18,
    margin: 20,
    width: 250,
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

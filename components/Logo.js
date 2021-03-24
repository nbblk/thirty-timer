import React from "react";

import { Text } from "react-native";

const Logo = (props) => {
  const style = {
    color: "black",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 80,
    fontWeight: "800",
  };
  return (
    <Text style={[style, props.style]} testID="logo">
      Thirty
    </Text>
  );
};

export default Logo;

import React from "react";
import { render } from "@testing-library/react-native";

import Logo from "../components/Logo";

test("Logo renders", async () => {
  const { getByTestId } = render(
    <Logo sharedStyle={{ fontFamily: "PressStart2P_400Regular" }} />
  );
  const logo = getByTestId("logo");
  expect(logo).toHaveTextContent("Thirty");
  expect(logo).toHaveStyle({
    color: "black",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 80,
    fontWeight: "800",
    fontFamily: "PressStart2P_400Regular",
  });
});

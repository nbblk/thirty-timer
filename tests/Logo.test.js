import React from "react";
import { render } from "@testing-library/react-native";

import Logo from "../components/Logo";

test("Logo renders", async () => {
  const { getByTestId } = render(
    <Logo style={{ fontFamily: "PressStart2P" }} />
  );
  const logo = getByTestId("logo");
  expect(logo).toHaveTextContent("Thirty");
  expect(logo).toHaveStyle({
    fontSize: 55,
    marginTop: 250,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "PressStart2P",
  });
});

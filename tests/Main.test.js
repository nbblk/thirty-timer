import React from "react";
import { render } from "@testing-library/react-native";

import Main from "../containers/Main";

test("it renders a logo and two buttons", async () => {
  const { getByTestId } = render(<Main />);
  const logo = getByTestId("logo");
  const startButton = getByTestId("startButton");
  const streakButton = getByTestId("streakButton");
  expect(logo).not.toBeEmpty();
  expect(startButton).not.toBeEmpty();
  expect(streakButton).not.toBeEmpty();
});

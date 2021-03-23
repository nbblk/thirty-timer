import React from "react";
import { render, fireEvent } from "@testing-library/react-native";

import Start from "../containers/Start";

jest.mock("react-router-native", () => ({
  useHistory: () => ({
    go: jest.fn(),
  }),
}));

test("it renders a timer and two buttons", async () => {
  const { getByTestId } = render(<Start />);
  const timer = getByTestId("timer");
  const handleTimerBtn = getByTestId("handleTimerBtn");
  const giveupBtn = getByTestId("giveupBtn");

  expect(timer).toHaveTextContent("30:00");
  expect(handleTimerBtn).toHaveTextContent("Start");
  expect(giveupBtn).toHaveTextContent("Give up");
});

test("button's text changes when clicking", async () => {
  const { getByTestId } = render(<Start />);
  const handleTimerBtn = getByTestId("handleTimerBtn");

  await fireEvent(handleTimerBtn, "press");
  expect(handleTimerBtn).toHaveTextContent("Pause");

  await fireEvent(handleTimerBtn, "press");
  expect(handleTimerBtn).toHaveTextContent("Start");
});

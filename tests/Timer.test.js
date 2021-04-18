import React from "react";
import { render, fireEvent } from "@testing-library/react-native";

import Timer from "../containers/Timer";
import { wrapper } from "../__mocks__/wrapper";

function renderTimer(props) {
  return render(<Timer />, wrapper);
}

test("it renders a timer and two buttons", async () => {
  const { getByTestId } = renderTimer();
  const timer = getByTestId("timer");
  const handleTimerBtn = getByTestId("handleTimerBtn");
  const giveupBtn = getByTestId("giveupBtn");

  expect(timer).toHaveTextContent("30:00");
  expect(handleTimerBtn).toHaveTextContent("Start");
  expect(giveupBtn).toHaveTextContent("Give up");
});

test("button's text changes when clicking", async () => {
  const { getByTestId } = renderTimer();
  const handleTimerBtn = getByTestId("handleTimerBtn");

  await fireEvent(handleTimerBtn, "press");
  expect(handleTimerBtn).toHaveTextContent("Pause");

  await fireEvent(handleTimerBtn, "press");
  expect(handleTimerBtn).toHaveTextContent("Start");
});

test("it has global styles", async () => {
  const { getByTestId } = renderTimer();

  expect(getByTestId("timerView")).toHaveStyle({
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    color: "#000000",
  });
  expect(getByTestId("timer")).toHaveStyle({
    backgroundColor: "#ffffff",
    color: "#000000",
  });
  expect(getByTestId("handleTimerBtn")).toHaveStyle({
    backgroundColor: "#ffffff",
    color: "#000000",
  });
  expect(getByTestId("giveupBtn")).toHaveStyle({
    backgroundColor: "#ffffff",
    color: "#000000",
  });
});

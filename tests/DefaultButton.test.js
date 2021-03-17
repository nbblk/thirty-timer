import React from "react";
import { fireEvent, render } from "@testing-library/react-native";

import DefaultButton from "../components/DefaultButton";

test("it renders button and fires event when pressed", async () => {
  const onPressMock = jest.fn();
  const { getByText } = render(
    <DefaultButton value="Start" press={onPressMock} />
  );
  const startButton = getByText("Start");
  expect(startButton).not.toBeEmpty();
  fireEvent(startButton, "press");
  expect(onPressMock).toHaveBeenCalled();
});

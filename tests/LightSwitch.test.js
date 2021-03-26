import React from "react";
import { render, fireEvent } from "@testing-library/react-native";

import LightSwitch from "../components/Icons/LightSwitch";

const pressIcon = jest.fn();

test("it renders the light-off icon", async () => {
  const { getByTestId } = render(
    <LightSwitch toggle={pressIcon} lightOff={false} />
  );
  const touchable = getByTestId("lightSwitchTouchable");
  const lightIcon = getByTestId("lightIcon");

  expect(touchable).not.toBeNull();
  expect(touchable).toContainElement(lightIcon);

  await fireEvent(touchable, "onPress");
  await expect(pressIcon).toHaveBeenCalled();
});

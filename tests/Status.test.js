import React from "react";
import { render } from "@testing-library/react-native";

import Status from "../components/Status";

test("it renders squares and title", () => {
  const { getByTestId, getAllByTestId } = render(
    <Status taskTitle="meditation" streaks="5" />
  );
  const squareIcons = getAllByTestId("squareIcon");
  const taskTitle = getByTestId("statusTitle");
  expect(squareIcons.length).toEqual(5);
  expect(getByTestId("statusView")).toContainElement(taskTitle);
  expect(taskTitle).toHaveTextContent("meditation");
});

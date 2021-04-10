import React from "react";
import { render, within } from "@testing-library/react-native";

import Home from "../components/Home";

jest.mock("react-router-native", () => ({
  Link: jest.fn().mockImplementation(({ children }) => {
    return children;
  }),
}));

test("it renders a logo and two buttons", () => {
  const { getByTestId, queryAllByTestId, queryByText } = render(<Home />);
  const home = getByTestId("homeView");
  const logo = getByTestId("logo");
  const homeBtns = queryAllByTestId("homeBtn");

  expect(home).not.toBeNull();
  expect(logo).not.toBeNull();
  expect(homeBtns).toHaveLength(2);
  expect(queryByText("Start")).not.toBeNull();
  expect(queryByText("Streaks")).not.toBeNull();
});

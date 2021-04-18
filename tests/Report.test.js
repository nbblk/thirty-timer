import React from "react";
import { render } from "@testing-library/react-native";
import Report from "../components/Report";
import { wrapper } from "../__mocks__/wrapper";

test("it renders tasks and total streaks", async () => {
  const tasks = [
    { title: "meditation", streaks: 2 },
    { title: "workout", streaks: 1 },
  ];
  const { getByTestId } = render(
    <Report session={{ completedTasks: tasks, completedSession: 1 }} />,
    wrapper
  );
  const reportView = getByTestId("reportView");
  const sessionCount = getByTestId("sessionCount");
  const streakCount = getByTestId("streakCount");
  const taskList = getByTestId("taskList");
  const addBtn = getByTestId("addBtn");
  const goHomeBtn = getByTestId("goHomeBtn");

  expect(reportView).toContainElement(sessionCount);
  expect(reportView).toContainElement(streakCount);
  expect(reportView).toContainElement(taskList);
  expect(reportView).toContainElement(addBtn);
  expect(reportView).toContainElement(goHomeBtn);

  expect(sessionCount).not.toBeEmpty();
  expect(streakCount).toHaveTextContent("30 x 3");
  expect(taskList).not.toBeEmpty();
  expect(addBtn).toHaveTextContent("Add a task");
  expect(goHomeBtn).toHaveTextContent("End session");
});

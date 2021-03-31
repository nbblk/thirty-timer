import React, { useState } from "react";

const sessionContext = React.createContext();

export const updateSession = (task) => {
  const [session, setSession] = useState({
    completedSession: 0,
    completedTasks: [],
  });

  const updateCompletedSessionData = () =>
    setSession({
      completedSession: session.completedSession + 1,
      completedTasks: session.completedTasks.slice().push(task),
    });

  return { session, updateCompletedSessionData };
};

export default sessionContext;

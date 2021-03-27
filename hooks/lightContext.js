import React, { useState } from "react";

const lightContext = React.createContext(false);

export const updateLight = () => {
  const [lightOff, setLightOff] = useState(false);

  const pressHandler = () => setLightOff(!lightOff);

  return { lightOff, pressHandler };
};

export default lightContext;

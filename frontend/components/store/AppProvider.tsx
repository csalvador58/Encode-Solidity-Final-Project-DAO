import React, { useState } from "react";
import AppContext from "./AppContext";

function AppProvider({ children }) {
  const [activeLink, setActiveLink] = useState("Main");

  const updateActiveState = (action) => {
    setActiveLink(action);
  };

  const storedAppContext = {
    activeLink,
    setActiveLink: updateActiveState,
  };

  return (
    <AppContext.Provider value={storedAppContext}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;

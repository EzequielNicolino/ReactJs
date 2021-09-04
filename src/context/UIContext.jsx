import React, { useState } from "react";
import { createContext } from "react";

export const UIContext = createContext();

export const UIContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <UIContext.Provider value={{ loading, setLoading }}>
      {children}
    </UIContext.Provider>
  );
};

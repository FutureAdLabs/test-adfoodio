import React, { useEffect, useState } from "react";

export const AppContext = React.createContext({});

export const AppProvider: React.FC = ({ children }) => {

  const [app, setApp] = useState([])

  useEffect(() => {
    console.log('AppContext useEffect!')
  }, [app])

  return (
    <AppContext.Provider value={{ app, setApp }}>
      {children}
    </AppContext.Provider>
  );
};
import { createContext, useState } from "react";
export const globalContext = createContext();

function Context({ children }) {
  const [globalState, setGlobalState] = useState("This is the global state");
  return (
    <globalContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </globalContext.Provider>
  );
}

export default Context;

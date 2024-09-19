import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { createContext } from "react";

import App from "./App.jsx";
import "./index.css";
import { useState } from "react";
export const Productcontext = createContext();
const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  return (
    <>
      <Productcontext.Provider value={{ products, setProducts }}>
        {children}
      </Productcontext.Provider>
    </>
  );
};
createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <ContextProvider>
      <App />
    </ContextProvider>
  </ChakraProvider>
);

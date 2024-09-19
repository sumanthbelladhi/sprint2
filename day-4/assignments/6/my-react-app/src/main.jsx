// Main.jsx
import { StrictMode, createContext, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, useNavigation } from "react-router-dom";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isLogedIn, setIsLogedIn] = useState(false);
  return (
    <AuthContext.Provider value={{ isLogedIn, setIsLogedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </BrowserRouter>
);

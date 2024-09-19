import { useEffect, useRef } from "react";
import UncontrolledInput from "./uncontrolled.jsx";
import "./App.css";

function App() {
  const focusRef = useRef(null);
  useEffect(() => {
    focusRef.current.focus();
  }, []);

  return (
    <>
      <label>
        NAME:
        <input ref={focusRef} type="text" placeholder="Enter your name..." />
      </label>
      <br />

      <br />
      <UncontrolledInput />
    </>
  );
}

export default App;

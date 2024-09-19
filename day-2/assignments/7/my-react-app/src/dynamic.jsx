import { useRef, useState } from "react";
function Dynamic() {
  const nameRef = useRef(null);
  const mailRef = useRef(null);
  const passRef = useRef(null);
  const [error, setError] = useState("");
  const change = (event) => {
    if (event == "name") {
      nameRef.current.focus();
      if (nameRef.current.value.length < 3) {
        document.getElementsByClassName("errorn")[0].innerText =
          "Invalid Name!";
        setError("Invalid Name");
      } else {
        document.getElementsByClassName("errorn")[0].innerText = "";
      }
    }
    if (event == "mail") {
      mailRef.current.focus();
      if (!mailRef.current.value.includes("@")) {
        document.getElementsByClassName("errorm")[0].innerText =
          "Invalid Mail!";
        setError("Invalid mail");
      } else {
        document.getElementsByClassName("errorm")[0].innerText = "";
      }
    }
    if (event == "pass") {
      passRef.current.focus();
      if (passRef.current.value.length < 8) {
        document.getElementsByClassName("errorp")[0].innerText =
          "Invalid password!";
        setError("Invalid password");
      } else {
        document.getElementsByClassName("errorp")[0].innerText = "";
      }
    }
  };
  const valid = () => {};
  return (
    <div className="box">
      <form action="" onSubmit={valid}>
        <label>
          Name: <input type="text" ref={nameRef} placeholder="Enter Name..." />
          <small className="errorn"></small>
        </label>
        <br />
        <label>
          Name: <input type="mail" ref={mailRef} placeholder="Enter mail..." />
          <small className="errorm"></small>
        </label>
        <br />
        <label>
          Name:{" "}
          <input
            type="password"
            ref={passRef}
            placeholder="Enter password..."
          />
          <small className="errorp"></small>
        </label>
        <button type="submit">SUBMIT</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
      <br />
      <button onClick={() => change("name")}>Name</button>
      <button onClick={() => change("mail")}>Email</button>
      <button onClick={() => change("pass")}>Password</button>
    </div>
  );
}
export default Dynamic;

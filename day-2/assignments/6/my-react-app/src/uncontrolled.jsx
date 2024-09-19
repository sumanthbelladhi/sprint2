import { useRef } from "react";

function UncontrolledInput() {
  const inputRef = useRef(null);
  const colorRef = useRef(null);
  const change = () => {
    var c = document.getElementById("body");
    c.innerText = inputRef.current.value;
    document.getElementById("body").style.backgroundColor =
      colorRef.current.value;
  };
  return (
    <>
      <input type="text" onChange={change} ref={inputRef} />
      <br />
      <br />
      <input
        type="text"
        ref={colorRef}
        placeholder="Enter exact color.."
        onChange={change}
      />
      <br />
      <br />
      <div
        id="body"
        style={{
          margin: "20px",
          padding: "20px",
          border: "1px solid gray",
          borderRadius: "5px",
        }}
      ></div>
    </>
  );
}

export default UncontrolledInput;

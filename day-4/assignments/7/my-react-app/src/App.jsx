import { Routes, Route, Link } from "react-router-dom";
import Users from "./User";
import Login from "./login";
import { AuthContext } from "./main";
import { useContext } from "react";
function App() {
  const { login, setLogin } = useContext(AuthContext);
  return (
    <>
      <ul>
        <li>
          {" "}
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/users"}>Users</Link>
        </li>
        <li>
          <Link to={"/login"}>{login ? "LOGIN" : "LOGOUT"}</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

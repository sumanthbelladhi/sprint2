import { useContext } from "react";
import { AuthContext } from "./main";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Login() {
  const { login, setLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (login) {
      navigate("/");
    }
  }, [login]);
  return (
    <>
      <h1>LoginStatus:{login.toString()}</h1>
      <button
        onClick={() => {
          setLogin(!login);
        }}
      >
        {login ? "LOGIN" : "LOGOUT"}
      </button>
    </>
  );
}

export default Login;

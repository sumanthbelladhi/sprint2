// Login.jsx
import { useContext, useEffect } from "react";
import { AuthContext } from "./main";
import { useNavigate } from "react-router-dom";

function Login() {
  const { isLogedIn, setIsLogedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (isLogedIn) {
      navigate("/");
    }
  }, [isLogedIn]);

  return (
    <div>
      <h1>Loged in Status: {isLogedIn.toString()}</h1>
      <button onClick={() => setIsLogedIn(true)}>LogIn</button>
    </div>
  );
}

export default Login;

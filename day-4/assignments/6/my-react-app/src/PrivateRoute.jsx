// PrivateRoute.jsx
import { useContext } from "react";
import { AuthContext } from "./main";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { isLogedIn, setIsLogedIn } = useContext(AuthContext);
  if (!isLogedIn) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
}

export default PrivateRoute;

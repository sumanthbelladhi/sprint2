// Navigation.js
import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <nav
      style={{
        padding: "20px",
        backgroundColor: "#f0f0f0",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Link to="/home" style={{ marginRight: "10px" }}>
        Home
      </Link>
      <Link to="/about" style={{ marginRight: "10px" }}>
        About Us
      </Link>
      <Link to="/product">Product</Link>
    </nav>
  );
}

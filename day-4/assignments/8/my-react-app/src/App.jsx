import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./home";
import { About } from "./about";
import { Product } from "./product";
import { Navigation } from "./Navigation";
import Context from "./contextProide";

function App() {
  return (
    <Context>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </Context>
  );
}

export default App;

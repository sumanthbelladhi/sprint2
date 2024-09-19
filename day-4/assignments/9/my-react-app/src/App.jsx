import axios from "axios";
import { useEffect } from "react";
import { Home } from "./home";
import { Productcontext } from "./main";
import { useContext } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SingleProduct from "./single";

export const URL = "https://fakestoreapi.com/products";

function App() {
  const { products, setProducts } = useContext(Productcontext);
  useEffect(() => {
    axios.get(`${URL}`).then((data) => {
      setProducts(data?.data);
    });
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import { CartContextProvider } from "./Context/CartContext";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductInfo from "./pages/ProductInfo";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { auth } from "./components/Firebase/Firebase";
import { Wishlist } from "./pages/Wishlist";
function App() {
  return (
    <CartContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/productInfo" element={<ProductInfo />} />
      </Routes>
    </CartContextProvider>
  );
}

export default App;

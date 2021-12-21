import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Author from "./pages/Author";
import Category from "./pages/Category";

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/wishlist" element={<Wishlist />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/product/:productId" element={<Product />} />
        <Route exact path="/category/:categoryId" element={<Category />} />
        <Route exact path="/author/:author" element={<Author />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App

import { useState } from 'react';
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
import Categories from "./pages/Categories";
import Authors from "./pages/Authors";
import { CartContext, WishlistContext } from './contexts';

import './App.css';

const App = () => {

  const [cart, setCart] = useState([]);

  const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem('wishlist')) || []);

  return (
    <CartContext.Provider value={{cart, setCart}}>
      <WishlistContext.Provider value={{wishlist, setWishlist}}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/wishlist" element={<Wishlist />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/categories" element={<Categories />} />
            <Route exact path="/authors" element={<Authors />} />
            <Route exact path="/products/:productId" element={<Product />} />
            <Route exact path="/categories/:category" element={<Category />} />
            <Route exact path="/authors/:author" element={<Author />} />

            <Route path="/*" element={<Home />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </WishlistContext.Provider>
    </CartContext.Provider>
  )
}

export default App

import { HashRouter as Router, Routes, Route } from "react-router-dom";
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
import Search from './pages/Search';
import BestsellingSerie from './pages/BestsellingSerie';
import Checkout from "./pages/Checkout";
import { SnackbarProvider } from 'notistack';
import { makeStyles } from '@mui/styles';
import WrapperContext from './components/WrapperContext';

import './App.css';
import Orders from "./pages/Orders";

const useStyles = makeStyles(() => ({
  success: {
    backgroundColor: "#BA7735 !important",
  }
}));

const App = () => {

  const classes = useStyles()

  return (
    <SnackbarProvider 
      maxSnack={3}
      classes={{variantSuccess: classes.success}}
    >
      <WrapperContext>
            <Router>
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
                <Route exact path="/series/:serie" element={<BestsellingSerie />} />
                <Route exact path="/search=:input" element={<Search />} />
                <Route exact path="/orders" element={<Orders />} />
                <Route exact path="/checkout" element={<Checkout />} />
                <Route path="/*" element={<Home />} />
              </Routes>
              <Footer />
            </Router>
      </WrapperContext>
    </SnackbarProvider>
  )
}

export default App

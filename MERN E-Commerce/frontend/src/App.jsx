import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./pages/About.jsx";
import Cart from "./pages/Cart.jsx";
import Collection from "./pages/Collection.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/home.jsx";
import Login from "./pages/Login.jsx";
import Orders from "./pages/Orders.jsx";
import PlaceOrder from "./pages/PlaceOrder.jsx";
import Product from "./pages/Product.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import SearchBar from "./components/SearchBar.jsx";

const App = () => {
  return (
    <div className=" h-screen px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer/>
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

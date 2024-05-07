import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "/src/Views/Home/Home";
import Header from "/src/Components/Header/Header.jsx";
import Footer from "/src/Components/Footer/Footer.jsx";
import ProductsView from "../Views/ProductsView/ProductsView";
import ShoppingCart from "../Views/ShoppingCart/ShoppingCart";
import ContactUs from "../Views/ContactUs/ContactUs";
import ProductDetails from "../Views/ProductDetails/ProductDetails";
import Checkout from "../Views/Checkout/Checkout";

const AppRouting = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Products" element={<ProductsView />} />
        <Route path="ContactUs" element={<ContactUs />} />
        <Route path="ShoppingCart" element={<ShoppingCart />} />
        <Route path="Product/:id" element={<ProductDetails />} />
        <Route path="Checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouting;

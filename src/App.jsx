import React from "react";
import { Route, Routes } from "react-router-dom";
import PostDetails from "./components/blogs/pages/[slug]";
import Cart from "./components/shop/component/Cart";
import Carts from "./components/shop/component/Carts";
import ShopDetails from "./components/shop/pages/[slug]";
import { Landing, Shop, Blog, AboutUs } from "./views";
import About from "./components/about/view/About";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/product" element={<Shop />} />
        <Route path="/product/:id" element={<ShopDetails />} />
        <Route path="/product/carts" element={<Cart />} />
        <Route path="/product/cart" element={<Carts />} />
        {/* <Route path="/product/productdetails/:izd" element={<ShopDetails />} /> */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<PostDetails />} />
        <Route path="/blog/category/:category" element={<Blog />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </>
  );
};
export default App;

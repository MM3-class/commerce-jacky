import React, { useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";
import SkeletonHeader from "./components/loader/SkeletonHeader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  Home,
  Contact,
  About,
  Search,
  NotFound,
  Checkout,
  Submitted,
} from "./pages/index";
import {
  AllBestSelling,
  AllFlashSale,
  AllProducts,
  SingleProduct,
  BuyNow,
} from "./features/index";
import GetCategory from "./features/filter/Category";
import Cart from "./features/cart/Cart";
import Favorite from "./features/favorite/Favorite";
import { ToastContainer } from "react-toastify";
import { useState } from "react";

React.lazy(() => import("./pages/index"));
React.lazy(() => import("./features/index"));

function App() {
  const navRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const closingMenu = (e) => {
      if (isOpen && navRef.current && navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mouseover", closingMenu);
    document.addEventListener("mouseout", closingMenu);
  }, [isOpen]);
  return (
    <div className="App mx-auto overflow-hidden">
      <ToastContainer />
      <SkeletonTheme baseColor="#7D8184" highlightColor="#999">
        <header>
          <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        </header>

        <main className="md:px-16 px-4" ref={navRef}>
          <React.Suspense fallback={<SkeletonHeader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/category/:path" element={<GetCategory />} />
              <Route
                path="/all-flash-sale-products"
                element={<AllFlashSale />}
              />
              <Route
                path="/all-best-selling-products"
                element={<AllBestSelling />}
              />
              <Route path="/all-products" element={<AllProducts />} />
              <Route path="/product/:id" element={<SingleProduct />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/favorite" element={<Favorite />} />
              <Route path="/search" element={<Search />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/submitted" element={<Submitted />} />
              <Route path="/buyNow" element={<BuyNow />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </React.Suspense>
        </main>

        <footer>
          <Footer />
        </footer>
      </SkeletonTheme>
      <ToastContainer />
    </div>
  );
}

export default App;

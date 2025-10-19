import { useState, useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import HeroSec from "./components/ViewPointHome/HeroSec";
import MyntraLoader from "./components/MyntraLoader";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import MenPage from "./components/RoutePages/Men/MenPage";
import WomenPage from "./components/RoutePages/Women/WomenPage";
import Login from "./components/Login";
import KidPage from "./components/RoutePages/Kids/KidPage";
import ProductPage from "./data/ProductPage";
import WishlistPage from "./components/RoutePages/Wishlist/WishlistPage";
import { WishlistProvider } from "./context/WishlistContext";
import { CartProvider } from "./context/CratContext";
import ProductInfo from "./data/ProductInfo";
import BagPage from "./components/RoutePages/Bag/BagPage";
import OrderSuccess from "./components/RoutePages/Bag/OrderSuccess";

function AppContent() {
  const location = useLocation();
  const hideFooterOnRoutes = ["/login"];

  return (
    <>
      <ScrollToTop />
      <WishlistProvider>
        <CartProvider>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSec />
                </>
              }
            />
            <Route path="/men" element={<MenPage />} />
            <Route path="/women" element={<WomenPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/kids" element={<KidPage />} />
            <Route path="/product/:category" element={<ProductPage />} />
            <Route path="/productInfo/:id" element={<ProductInfo />} />
            <Route path="/wishlist" element={<WishlistPage />} />
            <Route path="/bag" element={<BagPage />} />
            <Route path="/orderSuccess" element={<OrderSuccess />} />
          </Routes>
        </CartProvider>
      </WishlistProvider>
      {!hideFooterOnRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}

function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loader ? (
        <MyntraLoader />
      ) : (
        <BrowserRouter>
          <WishlistProvider>
            <AppContent />
          </WishlistProvider>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;

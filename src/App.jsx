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

function AppContent() {
  const location = useLocation();
  const hideFooterOnRoutes = ["/login"];

  return (
    <>
      <ScrollToTop />
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
      </Routes>
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
          <AppContent />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;

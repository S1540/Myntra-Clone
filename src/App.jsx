import { useState, useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import HeroSec from "./components/ViewPointHome/HeroSec";
import MyntraLoader from "./components/MyntraLoader";

import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MenPage from "./components/RoutePages/Men/MenPage";
import WomenPage from "./components/RoutePages/Women/WomenPage";

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
          <ScrollToTop />
          <Header />
          <Routes>
            {/* Homepage */}
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
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;

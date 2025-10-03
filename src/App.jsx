import { useState, useEffect } from "react";
import Header from "./components/Header";
import HeroSec from "./components/ViewPointHome/HeroSec";
import MyntraLoader from "./components/MyntraLoader";
import CategorySpecial from "./components/ViewPointHome/CategorySpecial";
import Footer from "./components/Footer";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import MenPage from "./components/Men/MenPage";

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
          <Header />
          <Routes>
            {/* Homepage */}
            <Route
              path="/"
              element={
                <>
                  <HeroSec />
                  <CategorySpecial />
                </>
              }
            />

            <Route path="/men" element={<MenPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;

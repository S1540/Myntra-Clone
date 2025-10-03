import { useState, useEffect } from "react";
import Header from "./components/Header";
import HeroSec from "./components/ViewPointHome/HeroSec";
import MyntraLoader from "./components/MyntraLoader";
import CategorySpecial from "./components/ViewPointHome/CategorySpecial";
import Footer from "./components/Footer";
// import ProductCarousel from "./components/ViewPointHome/ProductCarousel";

function App() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 1000);
    return () => clearTimeout(timer);
  });
  return (
    <>
      {loader ? (
        <MyntraLoader />
      ) : (
        <>
          <Header />
          <HeroSec />
          <CategorySpecial />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;

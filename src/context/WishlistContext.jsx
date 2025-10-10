import { createContext, useContext, useEffect, useState } from "react";
const WishlistContext = createContext({});
export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    return storedWishlist ? JSON.parse(storedWishlist) : [];
  });

  // Change any events on wishlist
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Add Or Remove product
  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      return exists
        ? prev.filter((p) => p.id !== product.id)
        : [...prev, product];
    });
  };

  const isWishlisted = (id) => wishlist.some((p) => p.id === id);
  return (
    <WishlistContext.Provider
      value={{ wishlist, toggleWishlist, isWishlisted }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
export const useWishlist = () => useContext(WishlistContext);

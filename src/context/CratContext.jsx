import { createContext, useContext, useEffect, useState } from "react";
const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedcart = JSON.parse(localStorage.getItem("cart"));
    return storedcart || [];
  });
  // After Update (Add or delete)
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  // Add To bag Fun
  const addToBag = (item) => {
    const alreadyExists = cart.some((cartItem) => cartItem.id === item.id);
    if (!alreadyExists) {
      setCart((prev) => [...prev, item]);
    }
  };
  // Remove From Bag Fun
  const removeFromBag = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToBag, removeFromBag }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);

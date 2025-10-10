import React from "react";
import { useWishlist } from "../../../context/WishlistContext";

function WishlistPage() {
  const { wishlist } = useWishlist();

  if (!wishlist.length)
    return <div className="p-4 text-center">No items in wishlist.</div>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {wishlist.map((item) => (
        <div key={item.id} className="border p-2 rounded">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-40 object-cover"
          />
          <h3 className="font-bold text-sm mt-2">{item.name}</h3>
          <p className="text-gray-500 text-xs">{item.brand}</p>
        </div>
      ))}
    </div>
  );
}

export default WishlistPage;

import { createContext, useState, useEffect } from "react";
import all_products from "../assets/all_products"; // Ensure the correct file path

export const ShopContext = createContext(null);

// Function to get default cart state
const getDefaultProduct = () => {
  let cart = {};
  for (let index = 0; index < all_products.length; index++) { // Fixed loop bounds
    cart[all_products[index].id] = 0; // Use product ID
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultProduct());

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const newCart = { ...prev, [itemId]: prev[itemId] + 1 };
      console.log("Updated Cart:", newCart); // Debugging
      return newCart;
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (prev[itemId] > 0) { // Ensure quantity doesn't go negative
        return { ...prev, [itemId]: prev[itemId] - 1 };
      }
      return prev;
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_products.find((product) => product.id === Number(item));
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount; // Return after the loop completes
  };


  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item];
      }}
      return totalItems; // Return after the loop completes};
    };


  // Debugging: Log cart updates
  useEffect(() => {
    console.log("Cart State Updated:", cartItems);
  }, [cartItems]);

  const contextValue = {getTotalCartAmount,getTotalCartItems,
    all_products,
    cartItems, // Provide cart state in context
    setCartItems, // Allow updates to cart in context
    addToCart,
    removeFromCart
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

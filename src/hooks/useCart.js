import { useState, useEffect } from "react";
import axios from "axios";

const useCart = () => {
  const [cartCount, setCartCount] = useState(0);
  const HOURS = 1;
  const getCartCountFromCache = () => {
    const cartData = JSON.parse(localStorage.getItem("cartData")) || [];
    const filteredData = cartData.filter((item) => {
      return new Date().getTime() - item.time <= HOURS * 3600000;
    });
    const cartCount = filteredData.reduce((total, item) => {
      return total + item.count;
    }, 0);
    return cartCount;
  };

  const removeExpiredItems = () => {
    const cartData = JSON.parse(localStorage.getItem("cartData")) || [];
    const filteredData = cartData.filter((item) => {
      return new Date().getTime() - item.time <= HOURS * 3600000;
    });
    localStorage.setItem("cartData", JSON.stringify(filteredData));
  };

  const addToCart = async (product, selectedColor, selectedStorage) => {
    try {
      const response = await axios.post(
        `https://itx-frontend-test.onrender.com/api/cart`,
        {
          id: product.id,
          colorCode: selectedColor[0].code,
          storageCode: selectedStorage[0].code,
        }
      );

      // Update cart count state
      setCartCount(response.data.count);

      // Get existing cart data from cache or create new array
      const cartData = JSON.parse(localStorage.getItem("cartData")) || [];

      // Add new item to cart data array
      const newItem = {
        count: response.data.count,
        time: new Date().getTime(),
      };
      cartData.push(newItem);

      // Save updated cart data to local storage
      localStorage.setItem("cartData", JSON.stringify(cartData));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cartData")) || [];
    const filteredData = cartData.filter((item) => {
      return new Date().getTime() - item.time <= HOURS * 3600000;
    });
    removeExpiredItems();
    const cartCount = filteredData.reduce((total, item) => {
      return total + item.count;
    }, 0);
    setCartCount(cartCount);
    localStorage.setItem("cartData", JSON.stringify(filteredData));
  }, []);

  return [addToCart, getCartCountFromCache, cartCount];
};

export default useCart;

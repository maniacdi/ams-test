import { useState, useEffect } from "react";

const useItems = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://itx-frontend-test.onrender.com/api/product"
        );
        const data = await response.json();

        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return { products, loading, error };
};

export default useItems;

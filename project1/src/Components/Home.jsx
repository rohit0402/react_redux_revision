import React, { useContext, useEffect } from "react";
import Card from "./Card";
import ProductContext from "../Context/UserContext";

const Home = () => {
  const { products, setProducts } = useContext(ProductContext);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:p-4">
      {products.map((product) => (
        <Card
          key={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          image={product.images[0]}
          product={product} // Pass the entire product object to Card
        />
      ))}
    </div>
  );
};

export default Home;
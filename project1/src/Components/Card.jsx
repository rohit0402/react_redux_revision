import React, { useContext } from "react";
import ProductContext from "../Context/UserContext";

const Card = ({ price, title, description, image, product }) => {
  const { cart, setCart } = useContext(ProductContext);

  const add_to_cart = (product) => {
    const isProductInCart = cart.some(item => item.id === product.id);
    if (isProductInCart) {
      alert('Product is already in the cart');
      return;
    }
    setCart([...cart, product]);
    console.log(cart);
    alert('Added to cart');
  };

  const truncateDescription = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <div className=" mx-28 lg:mx-auto md:mx-auto w-[80vw]  md:w-[40vw] lg:w-[20vw] mb-4 lg:px-4 py-3 bg-slate-50 rounded-md">
      <div className="overflow-hidden h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full bg-slate-200 hover:scale-110 cursor-pointer transition-all ease-in-out rounded-md hover:rounded-b-lg"
        />
      </div>
      <div>
        <span className="text-lg font-bold">{title}</span>
        <p>{truncateDescription(description, 100)}</p>
        <div className="flex justify-between items-center">
          <span>${price}</span>
          <button 
            className="bg-slate-500 px-3 py-1 rounded-md font-bold"
            onClick={() => add_to_cart(product)}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

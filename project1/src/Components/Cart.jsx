import React, { useContext } from "react";
import ProductContext from "../Context/UserContext";
import CartCard from "./CartCard";

const Cart = () => {
  const { cart } = useContext(ProductContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:p-4">
      {cart.length === 0 ? (
        <div className=" font-bold text-2xl flex justify-center w-[80vw]">Cart is Empty</div>
      ) : (
        cart.map((product) => (
          <CartCard
            key={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            image={product.images[0]}
            product={product}
          />
        ))
      )}
    </div>
  );
};

export default Cart;

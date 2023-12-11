//AddShoppingValues

import React, { useState } from "react";
import useShoppingStore from "@/contex/shoppingStore";
const AddShoppingValues = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useShoppingStore();

  const increaseQuantity = () => {
    if (quantity < product?.validationValue) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const addItem = () => {
    const newItem = { ...product, quantity };
    addToCart(newItem);
    console.log("Cart:", useShoppingStore.getState().cart);
  };
  return (
    <div className=" flex flex-col ">
      <div className=" flex items-center justify-between mx-8"> 
        <button
          className="bg-pedram-1 text-white px-4 py-2 rounded-md hover:bg-pedram-2 focus:outline-none"
          onClick={increaseQuantity}
        >
          +
        </button>
        <span className="text-gray-700 text-xl">{quantity}</span>
        <button
          className="bg-pedram-1 text-white px-4 py-2 rounded-md hover:bg-pedram-2 focus:outline-none"
          onClick={decreaseQuantity}
        >
          -
        </button>
      </div>
      <div>
        <button 
          onClick={addItem}
        className="flex mx-auto rounded-md bg-pedram-3 text-gray-100 m-2 p-3">
          
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
};

export default AddShoppingValues;

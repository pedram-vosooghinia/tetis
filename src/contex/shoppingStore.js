import { create } from "zustand";
import { toast } from "react-toastify";
const useShoppingStore = create((set) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cart.find(
        (cartItem) => cartItem.slug === item.slug
      );
      if (existingItem) {
        if (
          existingItem.quantity + item.quantity > item.inventory ||
          existingItem.quantity + item.quantity > item.validationValue
        ) {
          toast.error("متاسفانه مقدار موجودی کافی نیست.");
          return state;
        }

        existingItem.quantity += item.quantity;
      } else {
        if (item.quantity > item.inventory) {
          toast.error("متاسفانه مقدار موجودی کافی نیست.");
          return state;
        }
        state.cart.push(item);
      }
      return { cart: [...state.cart] };
    }),
}));

export default useShoppingStore;

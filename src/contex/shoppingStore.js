import { create } from "zustand";

const useShoppingStore = create((set) => ({
  cart: [],

  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cart.find(
        (cartItem) => cartItem.slug === item.slug
      );

      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.cart.push(item);
      }

      return { cart: [...state.cart] };
    }),
}));
export default useShoppingStore;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const BasketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    //Actions
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );
      let newBasket = [...state.items];
      index >= 0
        ? newBasket.splice(index, 1)
        : console.warn(
            `cannot remove product ${action.payload.id} as it's not found`
          );
      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = BasketSlice.actions;

//selectors
export const selectItems = (state) => state.basket.items;
export const selecTotal = (state) =>
  state.basket.items.reduce((total, item) => total + item.price, 0);

export default BasketSlice.reducer;

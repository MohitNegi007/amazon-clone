import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        //here action.payload.id is that id that we passed on removeFromBasket funtion in checkoutProduct
        (basketItem) => basketItem.id === action.payload.id
      );
      //index gives the index of that particular item that we want to remove from basket (array {state.items})
      // console.log(index);
      // console.log(action);
      // action is object that contains two things ,
      // 1. type of slice and reducer
      // 2. payload that is also a object that contain information that we passed through reducer funciton in another compoenent , check it out in console log
      // for example , here action.payload.id = id that we passed from checkoutProuct component;
      let newBasket = [...state.items];
      if (index >= 0) {
        // the item exists in the basket .. remove it
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `cant remove product (id ${action.payload.id}) as its not in the basket`
        );
      }
      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
// simple logic that checks selcted items
//state is glbal state , basket is reducer (that is defined in store) and items is array defined in basketSlice
// here you can write logic/functionality of alreay existing state like selectedTotal for items array .
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) =>
  state.basket.items.reduce((total, item) => total + item.price, 0);
export default basketSlice.reducer;

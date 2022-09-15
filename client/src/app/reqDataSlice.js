import { createSlice } from "@reduxjs/toolkit";

const reqDataSlice = createSlice({
  name: "reqData",
  initialState: {
    alltabsdata: {
      reqItems: [],
      subTotal: 0,
    },
  },
  reducers: {
    subTotal(state) {
      state.subTotal = state.alltabsdata.reqItems.reduce(
        (accumulator, currentValue) => accumulator + currentValue.total,
        0
      );
    },
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.alltabsdata.reqItems.find(
        (item) => item.id === newItem.id
      );
      if (!existingItem) {
        state.alltabsdata.reqItems.push(newItem);
      } else {
        existingItem.name = newItem.name;
        existingItem.quantity = newItem.quantity;
        existingItem.price = newItem.price;
        existingItem.total = newItem.total;
        existingItem.link = newItem.link;
        existingItem.comment = newItem.comment;
      }
    },
  },
});
export const reqDataActions = reqDataSlice.actions;
export default reqDataSlice;

import { createSlice, nanoid } from "@reduxjs/toolkit";

// these are the features like for login one feature, cart is one feature....
/*
A "slice" refers to a portion of your Redux store's state and the set of actions and reducers that operate on that specific portion. 
Slices are a way to modularize and organize your Redux store, making it more maintainable, especially in large applications.
In simple words SLICE is a Piece of store like if our app is a E-Commerce then product can be a Slice, user Can be a slice
Cart..... all these can be slices it is not compulsary but it is  eassy way to  handled our code.
 */
const initialState = {
  user: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      // Adding an event
      const user = { ...action.payload };
      state.user = user; // just pushing the event to the event State
    },
    deleteUser: (state, action) => {
      state.user = {};
    },
  },
});

// Exporting the Actions
export const { addUser, deleteUser } = userSlice.actions;

// We need to wire this Reducer with the Store which we have Specified
export default userSlice.reducer;

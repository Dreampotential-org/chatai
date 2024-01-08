import { createSlice } from "@reduxjs/toolkit";

const initialCart = {
  res: [],
}


const cartSlice = createSlice({
  name: "cart",
  initialState: initialCart,
  reducers: {

    uploadRes: (state, action) => {
      state.res.push(action.payload);
    },

    updateRes: (state, action) => {
      const { id, status, vidId } = action.payload;
      const indexToUpdate = state.res.findIndex(item => item.title === id);

      if (indexToUpdate !== -1) {
        state.res[indexToUpdate].status = status;
        state.res[indexToUpdate].videoId = vidId;
      }
    },
  },
});
export const {
  uploadRes, updateRes
} = cartSlice.actions;
export default cartSlice.reducer;
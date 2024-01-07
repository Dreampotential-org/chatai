import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './StoreCart/StoreCart'

export const store = configureStore({
      reducer: {
            allCart: cartReducer,
      },
});
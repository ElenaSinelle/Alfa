import { configureStore } from "@reduxjs/toolkit";
import { cardsApi } from "../services/cardsApi";
import { cardsSlice } from "./cardsSlice";

const store = configureStore({
  reducer: {
    [cardsApi.reducerPath]: cardsApi.reducer,
    cards: cardsSlice.reducer,
  },
  devTools: true,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(cardsApi.middleware),
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import { cardsApi } from "../services/cardsApi";

const store = configureStore({
  reducer: {
    [cardsApi.reducerPath]: cardsApi.reducer,
  },
  devTools: true,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(cardsApi.middleware),
});

export default store;

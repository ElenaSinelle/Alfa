import { configureStore } from "@reduxjs/toolkit";
import { cardsApi } from "../services/cardsApi";
import { cardsReducer } from "./cardsSlice";
import { likedReducer } from "./likedSlice";

const store = configureStore({
  reducer: {
    [cardsApi.reducerPath]: cardsApi.reducer,
    cards: cardsReducer,
    liked: likedReducer,
  },
  devTools: true,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(cardsApi.middleware),
});

export default store;

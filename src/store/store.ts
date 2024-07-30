import { configureStore } from "@reduxjs/toolkit";
import { cardsApi } from "../services/cardsApi";
import { cardsReducer } from "./cardsSlice";
import { likedReducer } from "./likedSlice";
import { themeReducer } from "./themeSlice";

const store = configureStore({
  reducer: {
    [cardsApi.reducerPath]: cardsApi.reducer,
    cards: cardsReducer,
    liked: likedReducer,
    theme: themeReducer,
  },
  devTools: true,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(cardsApi.middleware),
});

export default store;

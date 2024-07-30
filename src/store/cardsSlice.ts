import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { CardsData, RootState } from "../types";

export const cardsSlice = createSlice({
  name: "cards",
  initialState: [] as CardsData[],
  reducers: {
    setCards: (_, action: PayloadAction<CardsData[]>) => {
      return action.payload;
    },
    deleteCard: (state, action: PayloadAction<string>) => {
      return state.filter(
        card => card.idCategory !== action.payload,
      );
    },
  },
});

export const setCardsSelector = (state: RootState) =>
  state.cards;

export const { setCards, deleteCard } = cardsSlice.actions;

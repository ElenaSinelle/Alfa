import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { CardData, RootState } from "../types";

export const cardsSlice = createSlice({
  name: "cards",
  initialState: [] as CardData[],
  reducers: {
    setCards: (_, action: PayloadAction<CardData[]>) => {
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

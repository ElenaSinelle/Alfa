import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { CardData, RootState } from "../types";
import { deleteLikedCard } from "./likedSlice";

const initialState: CardData[] = [];

const cardsSlice = createSlice({
  name: "cards",
  initialState,
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
  extraReducers: builder => {
    builder.addCase(
      deleteLikedCard,
      (state, action: PayloadAction<string>) => {
        return state.filter(
          card => card.idCategory !== action.payload,
        );
      },
    );
  },
});

export const cardsReducer = cardsSlice.reducer;

export const { setCards, deleteCard } = cardsSlice.actions;

export const selectCards = (state: RootState) =>
  state.cards;

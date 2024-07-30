import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../types";

const initialState: string[] = [];

const likedSlice = createSlice({
  name: "liked",
  initialState,
  reducers: {
    likeCard: (state, action: PayloadAction<string>) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload);
      }
    },
    unlikeCard: (state, action: PayloadAction<string>) => {
      return state.filter(id => id !== action.payload);
    },
    unlikeAll: () => {
      return [];
    },
    deleteLikedCard: (state, action: PayloadAction<string>) => {
      return state.filter(id => id !== action.payload);
    },
  },
});

export const likedReducer = likedSlice.reducer;

export const { likeCard, unlikeCard, unlikeAll, deleteLikedCard } =
  likedSlice.actions;

export const selectLikedCards = (state: RootState) => state.liked;

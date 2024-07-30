import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, ThemeState } from "../types";

const initialState: ThemeState = "light";

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (_, action: PayloadAction) => {
      return action.payload;
    },
  },
});

export const themeReducer = themeSlice.reducer;

export const { setTheme } = themeSlice.actions;

export const selectTheme = (state: RootState): ThemeState => state.theme;

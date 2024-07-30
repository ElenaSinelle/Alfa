import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, ThemeState } from "../types";

const initialState: ThemeState = {
  theme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeState["theme"]>) => {
      state.theme = action.payload;
    },
  },
});

export const themeReducer = themeSlice.reducer;

export const { setTheme } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.theme;

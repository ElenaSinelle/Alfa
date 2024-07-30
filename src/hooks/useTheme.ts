import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch, ThemeState } from "../types";
import { selectTheme, setTheme } from "../store/themeSlice";

export const useTheme = (): [ThemeState, () => void] => {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useSelector<RootState, ThemeState>(selectTheme);

  const toggleTheme = () =>
    dispatch(setTheme(theme === "light" ? "dark" : "light"));

  return [theme, toggleTheme];
};

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../types";
import { selectTheme, setTheme } from "../store/themeSlice";

export const useTheme = (): [string, () => void] => {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useSelector<RootState, string>(selectTheme);

  const toggleTheme = () =>
    dispatch(setTheme(theme === "light" ? "dark" : "light"));

  return [theme, toggleTheme];
};

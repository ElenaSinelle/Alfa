import store from "./store/store";
import {
  QueryDefinition,
  BaseQueryFn,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  FetchArgs,
} from "@reduxjs/toolkit/query/react";

export type AppDispatch = typeof store.dispatch;
export interface ThemeState {
  theme: "light" | "dark";
}

export interface CardData {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export interface RootState {
  cardsApi: {
    getCards: QueryDefinition<
      void,
      BaseQueryFn<
        string | FetchArgs,
        unknown,
        FetchBaseQueryError,
        unknown,
        FetchBaseQueryMeta
      >,
      never,
      unknown,
      "cardsApi"
    >;
  };
  cards: CardData[];
  liked: string[];
  theme: ThemeState;
}
export interface CardData {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export interface CardProps {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export interface ShowLikedProps {
  showLiked: boolean;
  handleShowLiked: () => void;
}

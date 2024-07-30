import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CardData } from "../types";

export const cardsApi = createApi({
  reducerPath: "cardsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.themealdb.com/api/",
  }),
  endpoints: builder => ({
    getCards: builder.query<{ categories: CardData[] }, void>({
      query: () => "json/v1/1/categories.php",
    }),
  }),
});

export const { useGetCardsQuery } = cardsApi;

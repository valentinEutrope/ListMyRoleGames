import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MonstersParamsType } from "types/api/DD";
import getFetchBaseQueryContent from "utils/api/getFetchBaseQueryContent";

export const DDApi = createApi({
  baseQuery: fetchBaseQuery(getFetchBaseQueryContent("https://api.open5e.com")),
  reducerPath: "DDApi",
  tagTypes: ["DDApi"],
  keepUnusedDataFor: 3600,
  endpoints: (build) => ({
    getMonsters: build.query<any, MonstersParamsType>({
      query: (params: MonstersParamsType) => ({
        url: "/monsters",
        method: "GET",
        params,
      }),
    }),
    getMonster: build.query<any, string>({
      query: (slug: string) => ({
        url: `/monsters/${slug}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetMonstersQuery, useGetMonsterQuery } = DDApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getFetchBaseQueryContent from "utils/api/getFetchBaseQueryContent";

export const DDApi = createApi({
  baseQuery: fetchBaseQuery(getFetchBaseQueryContent("https://api.open5e.com")),
  reducerPath: "DDApi",
  tagTypes: ["DDApi"],
  keepUnusedDataFor: 3600,
  endpoints: (build) => ({
    getMonsters: build.query<any, any>({
      query: () => ({
        url: "/monsters",
        params: {
          limit: 100,
        },
        method: "GET",
      }),
    }),
    // ... give me more endpoints !
  }),
});

export const { useGetMonstersQuery } = DDApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const createRequest = (url) => url;
const baseUrl =
  "https://console.firebase.google.com/u/0/project/shopzee-f6bc4/database/shopzee-f6bc4-default-rtdb";
export const firebaseApi = createApi({
  reducerPath: "firebaseApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getSliderImages: builder.query({
      query: () => createRequest("/data/sliderItems"),
    }),
  }),
});
export const { useGetSliderImagesQuery } = firebaseApi;

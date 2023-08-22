import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { firebaseApi } from "./SliderImagesAPI";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    [firebaseApi.reducer]: firebaseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(firebaseApi.middleware),
});
setupListeners(store.dispatch);

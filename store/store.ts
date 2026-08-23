import { configureStore } from "@reduxjs/toolkit";
import languageReducer, { getLanguageState } from "./slices/languageSlice";

export type Language = "tr" | "en";

export const makeStore = (initialLanguage: Language = "tr") =>
  configureStore({
    reducer: {
      language: languageReducer,
    },
    preloadedState: {
      language: getLanguageState(initialLanguage),
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

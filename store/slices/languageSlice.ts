import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import translations from "@/locales/translations.json";
import blogTranslations from "@/locales/blog-translations.json";

type Language = "tr" | "en";

interface LanguageState {
  language: Language;
  translations: typeof translations.tr;
  blogTranslations: typeof blogTranslations.tr;
}

const initialState: LanguageState = {
  language: "tr",
  translations: translations.tr,
  blogTranslations: blogTranslations.tr,
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;
      state.translations = translations[action.payload];
      state.blogTranslations = blogTranslations[action.payload];
      if (typeof window !== "undefined") {
        localStorage.setItem("language", action.payload);
      }
    },
    toggleLanguage: (state) => {
      const newLanguage = state.language === "tr" ? "en" : "tr";
      state.language = newLanguage;
      state.translations = translations[newLanguage];
      state.blogTranslations = blogTranslations[newLanguage];
      if (typeof window !== "undefined") {
        localStorage.setItem("language", newLanguage);
      }
    },
    initializeLanguage: (state) => {
      if (typeof window !== "undefined") {
        const savedLanguage = localStorage.getItem("language") as Language;
        if (savedLanguage && (savedLanguage === "tr" || savedLanguage === "en")) {
          state.language = savedLanguage;
          state.translations = translations[savedLanguage];
          state.blogTranslations = blogTranslations[savedLanguage];
        }
      }
    },
  },
});

export const { setLanguage, toggleLanguage, initializeLanguage } =
  languageSlice.actions;

export default languageSlice.reducer;


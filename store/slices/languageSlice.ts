import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import translations from "@/locales/translations.json";
import blogTranslations from "@/locales/blog-translations.json";

type Language = "tr" | "en";

interface LanguageState {
  language: Language;
  translations: typeof translations.tr;
  blogTranslations: typeof blogTranslations.tr;
}

const isLanguage = (value: unknown): value is Language =>
  value === "tr" || value === "en";

export const getLanguageState = (language: Language): LanguageState => ({
  language,
  translations: translations[language],
  blogTranslations: blogTranslations[language],
});

/** Dil tercihini hem localStorage'a hem de sunucunun okuduğu çereze yazar. */
const persistLanguage = (language: Language) => {
  if (typeof window === "undefined") return;
  localStorage.setItem("language", language);
  document.cookie = `language=${language}; path=/; max-age=31536000; SameSite=Lax`;
};

const applyLanguage = (state: LanguageState, language: Language) => {
  state.language = language;
  state.translations = translations[language];
  state.blogTranslations = blogTranslations[language];
};

const initialState: LanguageState = getLanguageState("tr");

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      applyLanguage(state, action.payload);
      persistLanguage(action.payload);
    },
    toggleLanguage: (state) => {
      const newLanguage: Language = state.language === "tr" ? "en" : "tr";
      applyLanguage(state, newLanguage);
      persistLanguage(newLanguage);
    },
    initializeLanguage: (state) => {
      if (typeof window === "undefined") return;
      const savedLanguage = localStorage.getItem("language");
      if (isLanguage(savedLanguage) && savedLanguage !== state.language) {
        applyLanguage(state, savedLanguage);
      }
      // Çerez eski ziyaretçilerde hiç yazılmamış olabilir; senkronla.
      persistLanguage(state.language);
    },
  },
});

export const { setLanguage, toggleLanguage, initializeLanguage } =
  languageSlice.actions;

export default languageSlice.reducer;

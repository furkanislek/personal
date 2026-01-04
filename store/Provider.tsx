"use client";
import { Provider } from "react-redux";
import { store } from "./store";
import { useEffect } from "react";
import { initializeLanguage } from "./slices/languageSlice";

function LanguageInitializer({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    store.dispatch(initializeLanguage());
  }, []);

  return <>{children}</>;
}

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <LanguageInitializer>{children}</LanguageInitializer>
    </Provider>
  );
}


"use client";
import { Provider } from "react-redux";
import { useEffect, useState } from "react";
import { makeStore, type AppStore, type Language } from "./store";
import { initializeLanguage } from "./slices/languageSlice";
import { useAppSelector } from "./hooks";

/** Dil değişince <html lang> da güncellensin (CSS `uppercase` İ/I dönüşümü buna bağlı). */
function HtmlLangSync() {
  const language = useAppSelector((state) => state.language.language);
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);
  return null;
}

function LanguageInitializer({
  store,
  children,
}: {
  store: AppStore;
  children: React.ReactNode;
}) {
  useEffect(() => {
    store.dispatch(initializeLanguage());
  }, [store]);

  return <>{children}</>;
}

export function ReduxProvider({
  children,
  initialLanguage = "tr",
}: {
  children: React.ReactNode;
  initialLanguage?: Language;
}) {
  // Her istek/istemci için tek bir store oluştur; sunucudan gelen dil ile
  // başlat ki sunucu ve istemci aynı içeriği render etsin (flash olmasın).
  const [store] = useState<AppStore>(() => makeStore(initialLanguage));

  return (
    <Provider store={store}>
      <LanguageInitializer store={store}>
        <HtmlLangSync />
        {children}
      </LanguageInitializer>
    </Provider>
  );
}

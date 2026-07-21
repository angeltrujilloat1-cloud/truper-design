"use client";

import {createContext, useContext, useMemo, useState, type ReactNode} from "react";
import {NextIntlClientProvider} from "next-intl";
import en from "@/messages/en.json";
import es from "@/messages/es.json";

type Locale = "en" | "es";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

const messagesByLocale = {
  en,
  es,
};

export function LocaleProvider({children}: {children: ReactNode}) {
  const [locale, setLocale] = useState<Locale>("en");

  const value = useMemo(() => ({locale, setLocale}), [locale]);

  return (
    <LocaleContext.Provider value={value}>
      <NextIntlClientProvider locale={locale} messages={messagesByLocale[locale]} timeZone="UTC">
        {children}
      </NextIntlClientProvider>
    </LocaleContext.Provider>
  );
}

export function useLocaleSwitcher() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useLocaleSwitcher must be used within LocaleProvider");
  }

  return context;
}

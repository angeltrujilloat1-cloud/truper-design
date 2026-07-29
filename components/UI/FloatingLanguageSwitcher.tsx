"use client";

import { useLocaleSwitcher } from "@/components/UI/LocaleProvider";

function UsaFlag() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
      <defs>
        <clipPath id="usa-circle">
          <circle cx="14" cy="14" r="14" />
        </clipPath>
      </defs>
      <g clipPath="url(#usa-circle)">
        <rect width="28" height="28" fill="#b22234" />
        <rect y="2.15" width="28" height="2.15" fill="#ffffff" />
        <rect y="6.45" width="28" height="2.15" fill="#ffffff" />
        <rect y="10.75" width="28" height="2.15" fill="#ffffff" />
        <rect y="15.05" width="28" height="2.15" fill="#ffffff" />
        <rect y="19.35" width="28" height="2.15" fill="#ffffff" />
        <rect y="23.65" width="28" height="2.15" fill="#ffffff" />
        <rect width="13" height="15.1" fill="#3c3b6e" />
        <circle cx="2.2" cy="2.2" r="0.6" fill="#ffffff" />
        <circle cx="4.8" cy="2.2" r="0.6" fill="#ffffff" />
        <circle cx="7.4" cy="2.2" r="0.6" fill="#ffffff" />
        <circle cx="10" cy="2.2" r="0.6" fill="#ffffff" />
        <circle cx="3.5" cy="4.3" r="0.6" fill="#ffffff" />
        <circle cx="6.1" cy="4.3" r="0.6" fill="#ffffff" />
        <circle cx="8.7" cy="4.3" r="0.6" fill="#ffffff" />
        <circle cx="11.3" cy="4.3" r="0.6" fill="#ffffff" />
        <circle cx="2.2" cy="6.4" r="0.6" fill="#ffffff" />
        <circle cx="4.8" cy="6.4" r="0.6" fill="#ffffff" />
        <circle cx="7.4" cy="6.4" r="0.6" fill="#ffffff" />
        <circle cx="10" cy="6.4" r="0.6" fill="#ffffff" />
        <circle cx="3.5" cy="8.5" r="0.6" fill="#ffffff" />
        <circle cx="6.1" cy="8.5" r="0.6" fill="#ffffff" />
        <circle cx="8.7" cy="8.5" r="0.6" fill="#ffffff" />
        <circle cx="11.3" cy="8.5" r="0.6" fill="#ffffff" />
        <circle cx="2.2" cy="10.6" r="0.6" fill="#ffffff" />
        <circle cx="4.8" cy="10.6" r="0.6" fill="#ffffff" />
        <circle cx="7.4" cy="10.6" r="0.6" fill="#ffffff" />
        <circle cx="10" cy="10.6" r="0.6" fill="#ffffff" />
        <circle cx="3.5" cy="12.7" r="0.6" fill="#ffffff" />
        <circle cx="6.1" cy="12.7" r="0.6" fill="#ffffff" />
        <circle cx="8.7" cy="12.7" r="0.6" fill="#ffffff" />
        <circle cx="11.3" cy="12.7" r="0.6" fill="#ffffff" />
      </g>
    </svg>
  );
}

function SpainFlag() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
      <defs>
        <clipPath id="spain-circle">
          <circle cx="14" cy="14" r="14" />
        </clipPath>
      </defs>
      <g clipPath="url(#spain-circle)">
        <rect width="28" height="28" fill="#aa151b" />
        <rect y="7" width="28" height="14" fill="#f1bf00" />
        <rect x="8.2" y="10.2" width="2.8" height="7.4" rx="0.5" fill="#aa151b" />
        <rect x="8.75" y="11" width="1.7" height="1.5" fill="#f6d38a" />
        <rect x="8.75" y="13.1" width="1.7" height="3.7" fill="#f6d38a" />
      </g>
    </svg>
  );
}

type LanguageButtonProps = {
  active: boolean;
  label: string;
  onClick: () => void;
  children: React.ReactNode;
};

function LanguageButton({ active, label, onClick, children }: LanguageButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`inline-flex h-[50px] w-[50px] items-center justify-center rounded-[9999px] border bg-[#111111] shadow-[0_8px_20px_rgba(0,0,0,0.28)] transition-all duration-[250ms] hover:scale-[1.08] hover:border-[#FF6A00] ${
        active
          ? "border-[#FF6A00] shadow-[0_0_0_1px_rgba(255,106,0,0.36),0_0_18px_rgba(255,106,0,0.24)]"
          : "border-[rgba(255,255,255,0.08)]"
      }`}
    >
      {children}
    </button>
  );
}

export default function FloatingLanguageSwitcher() {
  const { locale, setLocale } = useLocaleSwitcher();

  return (
    <div className="fixed bottom-[96px] right-6 z-[9999] flex flex-col items-center gap-4 sm:bottom-[100px] lg:bottom-auto lg:top-[calc(50%+46px)]">
      <LanguageButton
        active={locale === "en"}
        label="Switch language to English"
        onClick={() => setLocale("en")}
      >
        <UsaFlag />
      </LanguageButton>
      <LanguageButton
        active={locale === "es"}
        label="Switch language to Spanish"
        onClick={() => setLocale("es")}
      >
        <SpainFlag />
      </LanguageButton>
    </div>
  );
}

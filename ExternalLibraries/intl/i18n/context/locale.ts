export const LOCALES = {
  ENGLISH: "en-us",
  BULGARIAN: "bg-bg",
};

export type Locale = (typeof LOCALES)[keyof typeof LOCALES];

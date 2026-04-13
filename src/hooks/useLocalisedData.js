import { useTranslation } from "react-i18next";

// I wrote this hook to avoid repeating the same language-merging logic in every component.
// Some data (like work experience) lives in .js files and has a `translations` object
// with a version for each language. This hook picks the right one and merges it
// over the base item, so the component just gets a plain object with the correct text.
// If a translation is missing for the current language, it falls back to Portuguese.
export const useLocalisedData = (items) => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.slice(0, 2) || "pt";
  return items.map((item) => {
    if (!item.translations) return item;
    const slice = item.translations[lang] ?? item.translations.pt ?? {};
    return { ...item, ...slice };
  });
};

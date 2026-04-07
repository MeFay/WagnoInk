import { useTranslation } from "react-i18next";

/**
 * Returns items with language-specific fields merged in.
 * Each item may have a `translations: { pt, en, es }` object.
 * The correct language slice is merged over the base object.
 */
export const useLocalisedData = (items) => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.slice(0, 2) || "pt";
  return items.map((item) => {
    if (!item.translations) return item;
    const slice = item.translations[lang] ?? item.translations.pt ?? {};
    return { ...item, ...slice };
  });
};

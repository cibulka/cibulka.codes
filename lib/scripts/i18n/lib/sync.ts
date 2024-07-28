import { i18nConfig, LOCALES } from "@/shared/i18n/config";
import ora from "ora";
import { loadExtractedData, saveExtractedData } from "./utils";

async function syncTranslation(locale: string, defaultTranslation: ExtractedTranslations) {
  const loading = ora(`[i18n]:syncing ${locale}`).start();

  const translation = await loadExtractedData(locale, {});

  const result: ExtractedTranslations = {};

  const usedKeys = Object.keys(defaultTranslation);
  for (let i = 0; i < usedKeys.length; i += 1) {
    const usedKey = usedKeys[i];
    const isTranslated = Boolean(translation[usedKey]?.defaultMessage);
    if (isTranslated) {
      result[usedKey] = {
        ...translation[usedKey],
      };
    } else {
      result[usedKey] = {
        ...defaultTranslation[usedKey],
      };
    }
  }

  await saveExtractedData(locale, result);

  loading.succeed(`[i18n]:synced ${locale}`);
}

export async function syncTranslations() {
  const defaultTranslation = await loadExtractedData(i18nConfig.defaultLocale);
  await Promise.all(
    LOCALES.filter((locale) => locale !== i18nConfig.defaultLocale).map((locale) =>
      syncTranslation(locale, defaultTranslation)
    )
  );
}

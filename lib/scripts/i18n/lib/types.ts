enum TranslationState {
  TRANSLATED = "TRANSLATED",
  NOT_TRANSLATED = "NOT_TRANSLATED",
  STALE = "STALE",
}

type ExtractedTranslations = Record<
  string,
  {
    defaultMessage: string;
    description?: string;
    state?: TranslationState;
  }
>;

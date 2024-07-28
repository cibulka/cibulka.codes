import type { IntlShape } from "@formatjs/intl";

import { LOCALES } from "./config";

export type I18n = IntlShape<string>;

export interface I18nImport {
  default: I18n["messages"];
}

export type Locale = (typeof LOCALES)[number];

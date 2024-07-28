import { extractTranslations } from "./lib/extract";
import { syncTranslations } from "./lib/sync";

extractTranslations().then(syncTranslations).catch(console.error);

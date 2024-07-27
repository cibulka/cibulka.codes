import { i18nConfig } from '@/shared/i18n/config';
import { $ } from 'execa';
import ora from 'ora';
import { getExtractedPath } from './utils';

export async function extractTranslations() {
  const loading = ora('[i18n]:extracting').start();

  const input = './src/**/*.{ts,tsx}';
  const output = getExtractedPath(i18nConfig.defaultLocale);
  const idPattern = '[sha512:contenthash:base64:6]';

  try {
    await $`formatjs extract ${input} --out-file ${output} --id-interpolation-pattern '${idPattern}'`;
    loading.succeed(`[i18n]:extracted ${i18nConfig.defaultLocale}`);
  } catch (err) {
    loading.warn(`[i18n]:${err}`);
    throw new Error('[i18n]:extraction failed');
  }
}

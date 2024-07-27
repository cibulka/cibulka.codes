import { $ } from 'execa';
import fs from 'fs';
import ora from 'ora';
import { compiledDir, extractedDir } from './constants';

export async function compileTranslations() {
  const loading = ora(`[i18n]:compiling`).start();

  if (!fs.existsSync(compiledDir)) {
    fs.mkdirSync(compiledDir);
  }

  await $`formatjs compile-folder ${extractedDir} ${compiledDir}`;

  loading.succeed(`[i18n]:compiled`);
}

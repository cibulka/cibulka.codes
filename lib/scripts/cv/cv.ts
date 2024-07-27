import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';

import { LOCALES } from '@/shared/i18n/config';

async function printPDF(locale: string) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(`http://localhost:3000/${locale}/cv`, { waitUntil: 'networkidle0' });
  const pdf = await page.pdf({ format: 'A4' });
  await browser.close();
  return pdf;
}

LOCALES.forEach((locale) => {
  printPDF(locale).then(async (buffer) => {
    const dir = path.join(process.cwd(), `public/cv-petr_cibulka-${locale}.pdf`);
    await fs.promises.writeFile(dir, buffer);
    console.log(`CV done for ${locale}`);
  });
});

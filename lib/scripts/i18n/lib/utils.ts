import fs from "fs";
import path from "path";

import { extractedDir } from "./constants";

export function getExtractedPath(locale: string) {
  return path.join(extractedDir, `${locale}.json`);
}

export async function loadExtractedData(locale: string, placeholder?: {}): Promise<ExtractedTranslations> {
  const filePath = getExtractedPath(locale);
  if (placeholder && !fs.existsSync(filePath)) return placeholder;
  const fileData = await fs.promises.readFile(filePath, "utf-8");
  return JSON.parse(fileData);
}

export async function saveExtractedData(locale: string, data: ExtractedTranslations) {
  const filePath = getExtractedPath(locale);
  const fileStr = JSON.stringify(data, null, 2);
  fs.promises.writeFile(filePath, fileStr);
}

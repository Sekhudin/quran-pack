import fs from 'fs';
import path from 'path';
import { SURAH_LIST, SURAH_NUM_VERSES } from '../../surah/source/constant';
import type { SurahVerses } from '../../surah/types';

/**
 * Asynchronous function to write file
 * @param param list contains directory location and file location
 * @param content string or array buffer
 * @param cb callback that contains error if process failed
 */
export function writeFile(
  [dirname, filePath]: [string, string],
  content: string | NodeJS.ArrayBufferView,
  cb: (err: NodeJS.ErrnoException | null) => void,
) {
  filePath = path.join(dirname, filePath);
  dirname = path.dirname(filePath);
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname, { recursive: true });
  }
  fs.writeFile(filePath, content, cb);
}

export const surahVerses = (
  num: number,
  v: SurahVerses,
): (typeof SURAH_LIST)[number] & SurahVerses => {
  // num start from 0
  const descriptions = SURAH_LIST[num];
  return { ...descriptions, ...v };
};

/**
 *
 * @param v number | start from 0
 * @returns num of verses
 */
export const getNumOfVerses = (v: number) => SURAH_NUM_VERSES[v];

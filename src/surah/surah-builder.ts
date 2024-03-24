import * as readFile from '../util/read-file';
import { surahList, type SurahList } from './source/surah-list';
import type { SurahNameID, SurahVerses } from './types';

type SurahBuilderFN = (v: SurahNameID | number) => {
  surah: SurahList[number];
  verses: SurahVerses;
};

const isValidSurahNumber = (v: number): boolean => v >= 1 && v <= 114;

export const surahBuilder: SurahBuilderFN = (value) => {
  let surah: SurahList[number] | null = null;
  if (typeof value === 'number') {
    if (!isValidSurahNumber(value)) throw new Error('Invalid surah number');
    const _tempSurah = surahList.filter((_v) => _v.number === value);
    if (_tempSurah.length === 1) {
      surah = _tempSurah[0];
    }
  }

  if (typeof value === 'string') {
    const _tempSurah = surahList.filter((_v) => _v.name_id === value);
    if (_tempSurah.length === 1) {
      surah = _tempSurah[0];
    }
  }

  if (!surah) throw new Error('Failed to find the surah');
  const verses = readFile.json<SurahVerses>(
    __dirname,
    `./source/${surah.number}.json`,
  );

  return { surah, verses };
};

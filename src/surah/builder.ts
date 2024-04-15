import { SURAH_LIST } from './source/constant';
import quran from './source';
import type { SurahNameID, SurahVerses, SurahList } from './types';

const isValidSurahNumber = (v: number): boolean => v >= 1 && v <= 114;

export const surahBuilder = (
  value: SurahNameID | number,
): SurahList[number] & SurahVerses => {
  let surah: SurahList[number] | null = null;
  if (typeof value === 'number') {
    if (!isValidSurahNumber(value)) throw new Error('Invalid surah number');
    const _tempSurah = SURAH_LIST.filter((_v) => _v.number === value);
    if (_tempSurah.length === 1) {
      surah = _tempSurah[0];
    }
  }

  if (typeof value === 'string') {
    const _tempSurah = SURAH_LIST.filter((_v) => _v.name_id === value);
    if (_tempSurah.length === 1) {
      surah = _tempSurah[0];
    }
  }

  if (!surah || !quran[surah.number as keyof typeof quran]) {
    throw new Error('Failed to find the surah name');
  }

  return quran[surah.number as keyof typeof quran];
};

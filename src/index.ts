import {
  Surah,
  SURAH_LIST,
  type SurahNameID,
  type SurahNumber,
  type SurahCategory,
} from './surah';

function surah(value: SurahNameID | SurahNumber) {
  return new Surah(value);
}

const surahList = SURAH_LIST;

export { surah, Surah, surahList };

export type { SurahNameID, SurahNumber, SurahCategory };

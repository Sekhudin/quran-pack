import type {
  SURAH_NAMES,
  SURAH_NUM_VERSES,
  SURAH_NAMES_ID,
  SURAH_NAMES_LATIN,
  SURAH_CATEGORIES,
  SURAH_NAMES_TRANS_ID,
} from '../constant/surah-constant';

export type SurahNumber = number;
export type SurahName = (typeof SURAH_NAMES)[number];
export type SurahNameLatin = (typeof SURAH_NAMES_LATIN)[number];
export type SurahNameID = (typeof SURAH_NAMES_ID)[number];
export type SurahNameTransID = (typeof SURAH_NAMES_TRANS_ID)[number];
export type SurahCategory = (typeof SURAH_CATEGORIES)[number];
export type SurahVerse = (typeof SURAH_NUM_VERSES)[number];
